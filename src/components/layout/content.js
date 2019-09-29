import React from "react"
import { Sidebar } from "./SideBar"
import { Tasks } from "../tasks"

export const Content = () => {

    return (
        <div className="content">
            <Sidebar />
            <Tasks />
        </div>
    )
}