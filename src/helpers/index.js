import { collatedTasks } from "../context";

export const collatedTasksExists = selectedProject => {
    return collatedTasks.find( task => task.key === selectedProject )
}

