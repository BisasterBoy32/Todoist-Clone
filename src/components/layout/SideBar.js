import React, { useState } from "react";
import { Projects } from "../projects"
import { CreateProject } from "../addProject";
import { useSelectedProjectValue } from "../../context";
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendar,
    FaRegCalendarAlt
} from "react-icons/fa"


export const Sidebar = () => {

    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState("INBOX");
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === "INBOX" ? "active" : undefined}
                >
                    <div onClick={() => {
                        setSelectedProject("INBOX");
                        setActive("INBOX");
                        document.title = "INBOX"
                    }}>
                        <span><FaInbox /></span>
                        <span> Inbox </span>
                    </div>
                </li>
                <li 
                data-testid="today"
                className={active === "TODAY" ? "active" : undefined}
                >
                    <div
                        onClick={() => {
                            setSelectedProject("TODAY");
                            setActive("TODAY");
                            document.title = "TODAY"
                        }}>
                        <span><FaRegCalendar /></span>
                        <span> Tododay </span>
                    </div>
                </li>
                <li data-testid="next_7"
                    className={active === "NEXT_7" ? "active" : undefined}
                >
                    <div
                        onClick={() => {
                            setSelectedProject("NEXT_7");
                            setActive("NEXT_7");
                            document.title = "NEXT_7"
                        }}>
                        <span><FaRegCalendarAlt /></span>
                        <span> Next 7 days </span>
                    </div>

                </li>
            </ul>
            <div 
                className="sidebar__middle"
                data-testid= "sidebar-middle-action"
                onClick = {() => setShowProjects(!showProjects)}
            >
                <span> 
                    <FaChevronDown className={!showProjects ? "hidden-projects" : undefined} />
                </span>
                <h2> Projects</h2>
            </div>
            <ul className="sidebar__projects">
                {showProjects && <Projects activeValue={{ active, setActive }} />}
            </ul>
            <CreateProject />
        </div>
    )
}