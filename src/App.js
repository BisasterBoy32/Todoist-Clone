import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/content";
import {
  ProjectsContextProvider,
} from "./context"

function App() {
  return (
    <ProjectsContextProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsContextProvider>
  );
}

export default App;
