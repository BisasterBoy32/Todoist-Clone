import React from "react";
import { Redirect } from "react-router-dom";
import { Sidebar } from "./SideBar";
import { Tasks } from "../tasks";
import { useUserValue } from "../../context";

export const Content = () => {
    const [user] = useUserValue();

    if (!user){
        return <Redirect to="/signup"/>
    }
    
    return (
        <div className="content">
            <Sidebar />
            <Tasks />
        </div>
    )
}