import React from "react";
import { FaSun  ,FaSpaceShuttle ,FaRegPaperPlane }
from "react-icons/fa";
import moment from "moment";

export const TaskDate = ({ setShowDate , setDate }) => {

    return (
        <div className="task-date" data-testid="task-date-overlay">
            <ul className = "task-date__list">
                <li
                data-testid = "test-date-today"
                onClick = {() => {
                    setDate(moment().format("DD-MM-YYYY"));
                    setShowDate(false);
                }}>
                    <span><FaSpaceShuttle /></span>
                    <span> Today</span>
                </li>

                <li
                    data-testid="test-date-tomorrow"
                    onClick={() => {
                        setDate(moment().add(1 ,"days").format("DD-MM-YYYY"));
                        setShowDate(false);
                    }}>
                    <span><FaSun /></span>
                    <span> Tomorrow</span>
                </li>

                <li
                    data-testid="test-date-next-week"
                    onClick={() => {
                        setDate(moment().add(7, "days").format("DD-MM-YYYY"));
                        setShowDate(false);
                    }}>
                    <span><FaRegPaperPlane /></span>
                    <span> This Week</span>
                </li>
            </ul>
        </div>
    )
}