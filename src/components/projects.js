import React from "react";
import { IndividualProject } from "./individualProject"
import {
    useProjectsValue,
    useSelectedProjectValue
}
    from "../context";

export const Projects = ({ activeValue }) => {

    const { active, setActive } = activeValue;
    const { projects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    return (
        projects && projects.map(project => {
            return (
                <li
                    key={project.docId}
                    data-doc-id={project.docId}
                    data-testid={`project-action-parent-${project.docId}`}
                    className={
                        active === project.docId
                            ? "active sidebar__project"
                            : "sidebar__project"
                    }
                >
                    <div
                        className="project-action"
                        role="button"
                        data-testid={`project-action-${project.docId}`}
                        aria-label={`Select ${project.name} as the task project`}
                        onClick={() => {
                            setActive(project.docId);
                            setSelectedProject(project.docId);
                            document.title = project.name
                        }}
                        onKeyDown={() => {
                            setActive(project.docId);
                            setSelectedProject(project.docId);
                            document.title = project.name
                        }}
                        tabIndex={0}
                    >
                        <IndividualProject project={project} />
                    </div>
                </li>
            )
        })
    )

}