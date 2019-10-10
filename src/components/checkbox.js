import React from "react";
import { firebase } from "../firebase";
import { useTasksValue } from "../context"

export const Checkbox = ({id}) => {

    const [tasks, setTasks] = useTasksValue();
    const archiveTask = () => {
        firebase
        .firestore()
        .collection("tasks")
        .doc(id)
        .update({
            archive : true
        })
        .then(res => setTasks([...tasks]) )
    };

    return (
        <div 
        className="checkbox-holder" data-testid="checkbox-action"
        onClick={archiveTask}
        >
        <span className="checkbox" />
        </div>
    )
};
