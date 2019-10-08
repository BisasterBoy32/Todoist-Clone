import React , { useState } from "react";
import { useProjectsValue ,useSelectedProjectValue } from "../context";
import { firebase } from "../firebase";
import { useUserValue } from "../context";

export const CreateProject = () => {
    const colors = 
    ["#6accbc", "#fad003", "#ff8d85", "#ff9932", "#af38eb", "#fa4545"];
    const [showCreate , setShowCreate ] = useState(false);
    const [value , setValue] = useState("");
    const { projects , setProjects } = useProjectsValue();
    const { selectedProject , setSelectedProject } = useSelectedProjectValue();
    const [user] = useUserValue();

    const addProject = (e) => {
        e.preventDefault();
        firebase.firestore()
        .collection("projects")
        .add({
            name: value,
            color: colors[Math.floor(Math.random()*colors.length)],
            userid: user.uid
        })
        .then( () => {
            setProjects([...projects]);
            setSelectedProject(selectedProject);
            setShowCreate(false);
            setValue("");
        })
    }

    return (
        <div className = "add-project" data-testid = "add-project">
            {showCreate && 
                <div className="add-project__input">
                    <input
                    value = {value} 
                    onChange = {(e) => setValue(e.target.value)}
                    data-testid="project-name"
                    type="text"
                    placeholder = "Name Your Project"
                    />
                    <button
                    className = "add-project__submit"
                    type="button"
                    data-testid = "add-project-submit"
                    onClick={addProject}
                    >
                    Add Project
                    </button>
                    <span
                    className="add-project__cancel"
                    data-testid = "hide-project-overlay"
                    onClick={() =>{
                        setShowCreate(false);
                        setValue("");
                    }}>
                    cancel
                    </span>
                </div>
            }
            <span className="add-project__plus">+</span>
            <span
            data-testid = "add-project-action"
            className="add-project__text"
            onClick={() => setShowCreate(!showCreate)}>
            Add Project
            </span>
        </div>
    )
}