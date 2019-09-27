import React ,{ useContext ,createContext} from 'react';
import { useProjects } from "../hooks"

const ProjectsContext = createContext();
export const ProjectsContextProvider = ({children}) => {
    const [ projects ,setProjects ] = useProjects();

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const ProjectsContextValue = () => useContext(ProjectsContext);

