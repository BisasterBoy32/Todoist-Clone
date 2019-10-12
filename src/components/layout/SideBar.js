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
    const [activeHum , setActiveHum] = useState(false)

    return (
        <div className={activeHum ? "sidebar is-active" :"sidebar"} data-testid="sidebar">
            <div className="hum-container">
                    <button
                    className={activeHum ? "hamburger hamburger--arrowturn-r is-active" : "hamburger hamburger--arrowturn-r"}
                        type="button"
                        onClick={() => setActiveHum(!activeHum)}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
            </div>
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === "INBOX" ? "active" : undefined}
                >
                    <div 
                        data-testid="inbox-action"
                        onClick={() => {
                        setSelectedProject("INBOX");
                        setActive("INBOX");
                        
                        // disactive sidebar appearence
                        setActiveHum(false);
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
                        data-testid="today-action"
                        onClick={() => {
                            setSelectedProject("TODAY");
                            setActive("TODAY");

                            // disactive sidebar appearence
                            setActiveHum(false);
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
                        data-testid="next-action"
                        onClick={() => {
                            setSelectedProject("NEXT_7");
                            setActive("NEXT_7");

                            // disactive sidebar appearence
                            setActiveHum(false);
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
                    <FaChevronDown
                    className={!showProjects ? "hidden-projects" : undefined}
                    data-testid = "icon-action"
                    />
                </span>
                <h2> Projects</h2>
            </div>
            <ul className={showProjects ? "sidebar__projects sidebar__projects--shown" : "sidebar__projects"  }>
                <Projects
                    activeValue={{ active, setActive }} 
                    setActiveHum={setActiveHum} 
                />
            </ul>
            <CreateProject />
        </div>
    )
}