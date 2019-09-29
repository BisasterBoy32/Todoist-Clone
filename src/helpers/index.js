import { collatedTasks } from "../constants";

export const collatedTasksExists = selectedProject => 
    collatedTasks.find( task => task.key === selectedProject );

export const getTitle = (projects , selectedProject) => 
    projects.find(project => project.docId === selectedProject );

export const getCollatedTitle = (selectedProject) => 
    collatedTasks.find(collatedTask => collatedTask.key === selectedProject);