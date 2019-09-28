import React , { useState } from "react";
import { IndividualProject } from "./individualProject"
import { 
    useProjectsValue , 
    useSelectedProjectValue} 
from "../context";

export const Projects = ({ activeValue = null}) => {

    const [active, setActive] = useState(activeValue);
    const { projects } = useProjectsValue();
    const { selectedProject  ,setSelectedProject } = useSelectedProjectValue();

    return (
        projects && projects.map( project => {
            return (
                <li 
                key = {project.docId}
                data-doc-id = {project.docId}
                data-testid="project-action-parent"
                className = {
                    active === project.docId
                    ? "active sidebar__project"
                    : "sidebar__project"
                }
                >
                <div 
                className="project-action"
                role="button"
                data-testid="project-action"
                tabIndex={0}
                aria-label={`Select ${project.name} as the task project`}
                onClick={() => {
                    setActive(project.docId);
                    setSelectedProject(project.projectid);
                }}>
                    <IndividualProject project={project} />
                </div>
                </li>
            )
        })
    )

}