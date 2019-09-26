import React from "react"
import { useTasks } from "../../hooks"
import { Checkbox } from "../checkbox"

export const Tasks = () => {

    let projectName = "project1";
    const [tasks] = useTasks("1");

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