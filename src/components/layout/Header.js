import React, { useState } from "react";
import { AddTask } from "../addTask"
import { FaPizzaSlice } from "react-icons/fa"
import Logo from "../../images/logo.png"

export const Header = ({ darkMode , setDarkMode }) => {
    const [showQuickAddTask, setShowQuickAddTask] = useState(false)

    return (
        <div className={darkMode ? "darkmode" : undefined} data-testid="header">
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="App-Logo" />
                    </div>
                    <div className="settings">
                        <ul>
                            <li
                                data-testid="quick-add-task-action"
                                className="settings__add"
                                onClick={() => setShowQuickAddTask(true)}
                            >
                                +
                            </li>
                            <li
                                data-testid="dark-mode-action"
                                className="settings__darkmode"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <FaPizzaSlice ></FaPizzaSlice>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <AddTask
                showAddTaskMain={false}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </div>
    )
}