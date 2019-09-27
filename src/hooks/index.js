import { useState ,useEffect}  from "react";
import { firebase } from "../firebase";
import { collatedTasksExists } from "../helpers";
import moment from "moment";

export const useTasks = selectedProject => {
    
    const [tasks , setTasks ] = useState([])
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect( () => {

        let userTasks = firebase
        .firestore()
        .collection("tasks")
        .where( "userid" , "==" ,"1");

        userTasks = selectedProject && !collatedTasksExists(selectedProject)
        ? userTasks.where("projectid" , "==" ,selectedProject)
        : selectedProject === "TODAY" 
        ? userTasks.where( "date" , "==" , moment().format("DD-MM-YYYY"))
        : selectedProject === "NEXT_7"
        ? userTasks.where("date" , "<=" ,moment().add(7 ,"days"))
        : selectedProject === "INBOX" || selectedProject === 0
        ? userTasks.where("date" , "==" ,"")
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

    useEffect(() => {

        firebase.firestore()
        .collection("projects")
        .where("userid", "==", "1")
        .get()
        .then(res => {
            const allProjects = res.docs.map( project => ({
                ...project.data(),
                id : project.id
            }));

            if (JSON.stringify(projects) !== JSON.stringify(allProjects) ) {
                setProjects(allProjects)
            }
        })
    
    }, [projects, setProjects]);

    return [projects];
}