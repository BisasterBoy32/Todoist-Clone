import { useState ,useEffect}  from "react";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";
import moment from "moment";
import { useUserValue } from "../context";

export const useTasks = selectedProject => {
    
    const [tasks , setTasks ] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([]);
    const [user] = useUserValue();

    useEffect( () => {

        let userTasks = firebase
        .firestore()
        .collection("tasks")
        .where("userid", "==", user.uid);

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

        userTasks.onSnapshot( snapshot => {
            const newTasks = snapshot.docs.map( task => {
                let data = task.data()
                return {
                    id: task.id,
                    ...data
                }
            });

        const unArchivedTasks = newTasks.filter(task => task.archive === false);
        const archivedTasks = newTasks.filter(task => task.archive === true);

        setTasks(unArchivedTasks);
        setArchivedTasks(archivedTasks);
        });
    }, [selectedProject])
    
    return [tasks, archivedTasks]
}

export const useProjects = () => {
    const [projects ,setProjects ] = useState([]);
    const [user] = useUserValue();
    let allProjects = [];

    //get the standards projects
    firebase
    .firestore()
    .collection("projects")
    .where("userid", "==" ,"0")
    .get()
    .then(res => {
        allProjects = res.docs.map( project => ({
            ...project.data(),
            docId : project.id
        }))
    })


    useEffect(() => {
        firebase.firestore()
        .collection("projects")
        .where("userid", "==", user ? user.uid : null)
        .orderBy("name")
        .get()
        .then(res => {
            const userProjects = res.docs.map( project => ({
                ...project.data(),
                docId : project.id
            }));
            allProjects = [...allProjects, ...userProjects] 
            if (JSON.stringify(projects) !== JSON.stringify(allProjects) ) {
                setProjects(allProjects)
            }
        })
    
    }, [projects, user]);

    return [projects, setProjects];
}

// custom hook for tracking the user signin , signup, logout
export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        firebase
        .auth()
        .onAuthStateChanged(userInfo => {
            setUser(userInfo)
        })
    }, [])

    return [user, setUser] 
}