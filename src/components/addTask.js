import React , { useState } from "react";
import { firebase } from "../firebase";
import moment from "moment"
import { 
    useSelectedProjectValue,
    useProjectsValue
}
from "../context"

export const AddTask = () => {
    const { selectedProject }  = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const [ value , setValue ] = useState("");
    const [ show, setShow] = useState(false);

    const addTask = () => {
        firebase.
        firestore()
        .collection("tasks")
        .add({
            userid  : "1",
            projectid : "1",
            archive : false,
            date: moment().format("DD-MM-YYYY"),
            task: value
        })
    }

    return (
        <div>
            <span onClick={() => setShow(!show)}> + add Task </span>
            { show &&
                <div>
                    <input 
                    className = "add"
                    data-testid = "add"
                    type = "text"
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                    />
                    <button
                    type = "button"
                    onClick={addTask}
                    className="add-task"
                    data-testid = "add-test-action">
                    Add Task
                    </button>
                    <span 
                    data-testid= "cancel"
                    className="cancel"
                    onClick = { () => {
                        setShow(false);
                        setValue("");
                    }}
                    > Cancel</span>
                </div>
            }
        </div>
    )
}