import React from "react";
import { Checkbox } from "./checkbox";
import { AddTask } from "./addTask";
import { 
    collatedTasksExists,
    getTitle,
    getCollatedTitle } 
from "../helpers";

import { 
    useSelectedProjectValue ,
    useProjectsValue,
    useTasksValue
} 
from "../context";


export const Tasks = () => {

    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    let projectName = "";

    if (projects && !collatedTasksExists(selectedProject)) {
        const seletedProjectObj = getTitle(projects, selectedProject);
        projectName = seletedProjectObj && seletedProjectObj.name;
    }

    if (projects && collatedTasksExists(selectedProject)) {
        const seletedProjectObj = getCollatedTitle(selectedProject);
        projectName = seletedProjectObj && seletedProjectObj.name;
    }
    const [tasks] = useTasksValue();

    return (
        <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{projectName}</h2>
        <ul className="tasks__list">
        {
            tasks.map( task => {
                return (
                    <li key={task.id}>
                        <Checkbox id={task.id} />
                        <span >{task.task}</span>
                    </li>
                )
            })
        }
        </ul>
        <AddTask />
        </div>
    )
}