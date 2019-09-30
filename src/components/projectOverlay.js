import React from "react";
import { useProjectsValue } from "../context"

export const ProjectOverlay = ({ setProject, setShowProjectOverlay }) => {

    const { projects } = useProjectsValue();
    
    return projects && (
        <div className="project-overlay" data-testid = "project-overlay">
        <ul className = "project-overlay__list">   
        {
            projects.map( project =>
                <li key={project.docId}
                data-testid = "project-overlay-action"
                onClick={() =>{
                    setProject(project.docId);
                    setShowProjectOverlay(false);
                }}
                >
                    <span className="sidebar__dot"
                        style={{ color: project.color, fontSize: "42px" }}>・</span>
                    <span className="sidebar__project-name"> {project.name} </span> 
                </li> 
            )
        }
        </ul>
        </div>
    )
}