import React from "react"
import {
    FaChevronDown ,
    FaInbox ,
    FaRegCalendar ,
    FaRegCalendarAlt 
    } from "react-icons/fa"

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar"> 
            <ul className="sidebar--generics">
                <li>
                    <span><FaInbox /></span>
                    <span> Inbox </span>
                </li>
                <li>
                    <span><FaRegCalendar /></span>
                    <span> Tododay </span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span> Next 7 days </span>
                </li>
            </ul>
            <div className="sidebar--middle">
                <span> <FaChevronDown /></span>
                <h2> Projects</h2>
            </div>
            <ul className="sidebar--projects">
            projects will be here
            </ul>
            add project component here
        </div>
    )
}