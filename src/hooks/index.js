import { useState ,useEffect ,useRef }  from "react";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";
import moment from "moment";
import { useUserValue } from "../context";

export const useTasks = selectedProject => {
    const [tasks , setTasks ] = useState([])
    const [user] = useUserValue();

    useEffect( () => {
        let userTasks = firebase
        .firestore()
        .collection("tasks")
        .where("userid", "==", (user && user !== "loading") ? user.uid : null);
        
        userTasks = selectedProject && !collatedTasksExists(selectedProject)
        ? userTasks.where("projectid" , "==" ,selectedProject)
        : selectedProject === "INBOX"
        ? userTasks.where("projectid", "==", "INBOX")
        : selectedProject === "TODAY" 
        ? userTasks.where( "date" , "==" , moment().format("DD-MM-YYYY"))
        : selectedProject === "NEXT_7"
        ? userTasks
        .where("date", "<=", moment().add(7, "days").format("DD-MM-YYYY"))
        .where("date", ">", moment().format("DD-MM-YYYY"))
        : userTasks

        userTasks.get()
        .then(res => {

            const newTasks = res.docs.map( task => {
                let data = task.data()
                return {
                    id: task.id,
                    ...data
                }
            });

        
        const unArchivedTasks = newTasks.filter(task => task.archive === false);

        if (JSON.stringify(tasks) !== JSON.stringify(unArchivedTasks)){
        setTasks(unArchivedTasks);
        }
        });
        
    }, [selectedProject, tasks, user])

    return [tasks, setTasks]
}

export const useProjects = () => {
    const [projects ,setProjects ] = useState([]);
    const [user] = useUserValue();
    let commonProjects = useRef([]);
    let allProjects = useRef([]);

    if ( user && user !== "loading"){
    //get the standards projects
    firebase
    .firestore()
    .collection("projects")
    .where("userid", "==" ,"0")
    .get()
    .then(res => {
        commonProjects.current = res.docs.map( project => ({
            ...project.data(),
            docId : project.id
        }))
    })
    }

    useEffect(() => {

        firebase.firestore()
        .collection("projects")
        .where("userid", "==", (user && user !== "loading")  ? user.uid : null)
        .orderBy("name")
        .get()
        .then(res => {
            const userProjects = res.docs.map( project => ({
                ...project.data(),
                docId : project.id
            }));

            // set allProjects = common project + userProject only if
            // there is a new user projects 
            if (allProjects.current.length !== (commonProjects.current.length + userProjects.length)){
                allProjects.current = [...commonProjects.current, ...userProjects]
            }
             
            if (JSON.stringify(projects.current) !== JSON.stringify(allProjects.current)) {
                setProjects(allProjects.current)
            }
        })

    }, [projects,user]);
    return [projects, setProjects];
}

// custom hook for tracking the user signin , signup, logout
export const useUser = () => {
    const [user, setUser] = useState("loading");

    useEffect(() => {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    // get the user name from firebase 
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(user.uid)
                        .get()
                        .then(doc => {
                            if ( doc.exists){
                                setUser({
                                    email : user.email,
                                    name : doc.data().name,
                                    uid: user.uid
                                })
                            }else {
                                setUser({
                                    email: user.email,
                                    uid : user.uid
                                })
                            }
                        })
                } else {
                    setUser(user);
                }
            })
    }, [])
    return [user, setUser]
}