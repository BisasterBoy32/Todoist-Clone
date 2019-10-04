import React, { useState ,Fragment } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";
import { ProjectOverlay } from "./projectOverlay";
import { TaskDate } from "./taskDate";
import { useSelectedProjectValue }
from "../context";

export const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const { selectedProject, setSelectedProject } = useSelectedProjectValue();
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [project, setProject] = useState("");
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [showMain, setShowMain] = useState(shouldShowMain);

    const addTask = () => {
        const projectid = project || selectedProject;

        let collatedDate = null;
        if (projectid === "TODAY") {
            collatedDate = moment().format("DD-MM-YYYY");
        } else if (projectid === "NEXT_7") {
            collatedDate =
                moment().add(7, "days").format("DD-MM-YYYY");
        }

        return (
            projectid &&
            task &&
            firebase
                .firestore()
                .collection("tasks")
                .add({
                    userid: "1",
                    archive: false,
                    date: collatedDate || date,
                    projectid,
                    task
                })
                .then(res => {
                    setProject("");
                    setTask("");
                    setShowDate(false);
                    setDate("");
                    setShowMain(false);
                    setShowQuickAddTask && setShowQuickAddTask(false);
                    setShowProjectOverlay(false);
                })
        )
    }

    return (
        <div className={showQuickAddTask ? "add-task add-task__overlay" : "add-task"}>
            {showAddTaskMain &&
                <div
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                    >
                        <span className="add-task__plus"> + </span>
                        <span className="add-task__text" > Add Task </span>
                </div>
            }
            { (showQuickAddTask || showMain ) && (
                <div className = "add-task__main" data-testid = "add-task-main">
                    { showQuickAddTask &&
                        <Fragment>
                            <div data-testid = "quick-add-task">
                            <h2 className="header"> Quick Add Task </h2>
                                <span
                                    aria-label="Close"
                                    className="add-task__cancel-x"
                                    data-testid="add-task-quick-cancel"
                                    onClick={() => {
                                        setShowQuickAddTask(false);
                                        setShowProjectOverlay(false);
                                        setTask("");
                                        setProject("");
                                    }}> X
                                </span>
                            </div>
                        </Fragment>
                    }
                    <input 
                    type = "text"
                    className = "add-task__content"
                    data-testid = "add-task-content"
                    value = {task}
                    onChange = {(e) => setTask(e.target.value)}
                    />

                    <button
                    type = "button"
                    className = "add-task__submit"
                    data-testid = "add-task"
                    onClick = {addTask}>
                    Add Task
                    </button>

                    {!showQuickAddTask &&
                        <span
                            className="add-task__cancel"
                            data-testid="add-task-main-cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false);
                                setProject("");
                                setTask("");
                            }}
                        >cancel
                    </span>
                    }

                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}>
                        <FaRegListAlt />
                    </span>

                    <span 
                        className= "add-task__date"
                        data-testid= "show-task-date-overlay"
                    onClick = {() => setShowDate(!showDate)}>
                    <FaRegCalendarAlt />
                    </span>
                    {showProjectOverlay &&
                        <ProjectOverlay 
                        setProject={setProject}
                        setShowProjectOverlay={setShowProjectOverlay}
                        />
                    }
                    {showDate &&
                        <TaskDate 
                        setDate={setDate}
                        setShowDate={setShowDate}
                        />
                    }
                </div>        
            )}
        </div>
    )
}