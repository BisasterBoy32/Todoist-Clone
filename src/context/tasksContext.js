import React, { useContext, createContext } from 'react';
import { useSelectedProjectValue } from "./selectedProject_context"
import { useTasks } from "../hooks";

const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
    const { selectedProject } = useSelectedProjectValue();
    const [tasks, setTasks] = useTasks(selectedProject);

    return (
        <TasksContext.Provider value={[tasks, setTasks]}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksValue = () => useContext(TasksContext);

