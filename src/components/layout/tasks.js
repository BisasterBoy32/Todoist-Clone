import React from "react"
import { useTasks } from "../../hooks"
import { Checkbox } from "../checkbox"
import { useSelectedProjectValue }
from "../../context"

export const Tasks = () => {

    const { selectedProject, setSelectedProject }
    = useSelectedProjectValue();
    let projectName = "project name";

    const [tasks] = useTasks(selectedProject);
    
    return (
        <div className="tasks" data-testid="tasks">
        <h2 data-testid="project-name">{projectName}</h2>
        <ul>
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
        </div>
    )
}