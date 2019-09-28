import React from 'react';
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/content";
import {
  ProjectsProvider,
  SelectedProjectProvider
} from "./context"

function App() {
  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
