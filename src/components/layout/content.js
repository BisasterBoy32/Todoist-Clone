import React from "react";
import { Redirect } from "react-router-dom";
import { Sidebar } from "./SideBar";
import { Tasks } from "../tasks";
import { useUserValue } from "../../context";

export const Content = () => {
    const [user] = useUserValue();
    console.log(user)

    if (!user){
        return <Redirect to="/signup"/>
    } else if (user === "loading" ){
        return <h1 style={{ marginTop: "4rem", }}> Loading...</h1>
    }
    return (
        <div className="content"> 
            <Tasks />
            <Sidebar />
        </div>
    )
}