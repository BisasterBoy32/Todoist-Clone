import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddTask } from "../addTask"
import { FaPizzaSlice ,FaSignOutAlt } from "react-icons/fa";
import Logo from "../../images/logo.png";
import { useUserValue } from "../../context";
import { firebase } from "../../firebase";

export const Header = ({ setMode }) => {
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    const [user] = useUserValue();

    const logOutAction = () => {
        document.title = "Todoist";
        firebase
        .auth()
        .signOut();
    }

    return (
        <div data-testid="header">
            <header>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="App-Logo" />
                    </div>
                    <div className="settings">
                        <ul>
                            {user && user !== "loading" &&
                                <li
                                    data-testid="quick-add-task-action"
                                    className="settings__add"
                                    onClick={() => setShowQuickAddTask(true)}
                                >
                                    +
                                </li>
                            }
                            {!user &&
                            <li className="settings__signup">
                                <Link to="/signup"> Signup </Link>
                            </li>
                            }
                            {!user &&
                            <li className="settings__signup">
                                <Link to="/login"> Login </Link>
                            </li>
                            }
                            <li
                                data-testid="dark-mode-action"
                                className="settings__darkmode"
                                onClick={() => setMode(preMode => {
                                    if (preMode === 3) {
                                        return 0;
                                    }
                                    return preMode+1;
                                })}
                            >
                                <FaPizzaSlice ></FaPizzaSlice>
                            </li>
                            {user && user !== "loading" &&
                                <li
                                    data-testid="logout-action"
                                    className="settings__logout"
                                    onClick={logOutAction}
                                >
                                    <FaSignOutAlt ></FaSignOutAlt>
                                </li>
                            }
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