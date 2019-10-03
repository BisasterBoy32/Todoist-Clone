import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/content";
import {
  ProjectsProvider,
  SelectedProjectProvider
} from "./context"

export function App() {

const [darkMode, setDarkMode] = useState(false)

  return (
    <SelectedProjectProvider>
    <ProjectsProvider>
      <main className="App" data-testid="application">
          <Header darkMode={darkMode}  setDarkMode={setDarkMode}  />
          <Content />
      </main>
    </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
