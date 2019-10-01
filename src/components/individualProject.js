import React, { useState } from "react";
import { firebase } from "../firebase";
import { FaTrashAlt } from "react-icons/fa";
import { Fragment } from "react"
import {
    useSelectedProjectValue,
    useProjectsValue
}
    from "../context";

export const IndividualProject = ({ project }) => {
    const { setSelectedProject }
        = useSelectedProjectValue();
    const { projects, setProjects } = useProjectsValue();
    const [showConfirm, setShowConfirm] = useState(false);

    const deleteProject = docId => {
        firebase.firestore()
            .collection("projects")
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects]);
                setSelectedProject("INBOX");
            })
    }

    return (
        <Fragment>
            <span className="sidebar__dot"
                style={{ color: project.color, fontSize: "42px" }}>・</span>
            <span className="sidebar__project-name"> {project.name} </span>
            <span className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={() => setShowConfirm(!showConfirm)}>
                <FaTrashAlt />
            </span>
            {showConfirm &&
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p> Are you sure you want to delete this project?</p>
                        <button
                            type="button"
                            onClick={() => deleteProject(project.docId)}
                        > Yes, Delete
                    </button>
                        <span onClick={() => setShowConfirm(!showConfirm)}> Cancel </span>
                    </div>
                </div>
            }
        </Fragment>
    )
}

