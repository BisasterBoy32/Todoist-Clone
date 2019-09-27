import React from "react";
import { ProjectsContextValue } from "../../context"
import {
    FaChevronDown ,
    FaInbox ,
    FaRegCalendar ,
    FaRegCalendarAlt 
    } from "react-icons/fa"


export const Sidebar = () => {

    const { projects } = ProjectsContextValue();

    return (
        <div className="sidebar" data-testid="sidebar"> 
            <ul className="sidebar__generic">
                <li data-testid="inbox" className="inbox">
                    <span><FaInbox /></span>
                    <span> Inbox </span>
                </li>
                <li data-testid="today" className="today">
                    <span><FaRegCalendar /></span>
                    <span> Tododay </span>
                </li>
                <li data-testid="next_7" className="next_7">
                    <span><FaRegCalendarAlt /></span>
                    <span> Next 7 days </span>
                </li>
            </ul>
            <div className="sidebar--middle">
                <span> <FaChevronDown /></span>
                <h2> Projects</h2>
            </div>
            <ul className="sidebar__projects">
            {
                projects.map(project => {
                    return <li key={project.id}> { project.name }</li>
                })
            }
            </ul>
            add project component here
        </div>
    )
}