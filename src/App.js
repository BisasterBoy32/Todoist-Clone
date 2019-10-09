import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/content";
import { Register } from "./components/auth/register"
import { Login } from "./components/auth/login"
import { HashRouter, Switch, Route } from "react-router-dom";
import {
  ProjectsProvider,
  SelectedProjectProvider,
  UserProvider,
  TasksProvider
} from "./context"

export function App() {

  const modes = [undefined, "darkmode", "skymode", "purplemode"]
  const [mode, setMode] = useState(0)

  return (
    <UserProvider>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <TasksProvider >
            <main data-testid="application" className={`App ${modes[mode]}`}>
              <HashRouter >
                <Header mode={mode} setMode={setMode} />
                <Switch >
                  <Route exact path="/" component={Content} />
                  <Route exact path="/signup" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </HashRouter>
            </main>
          </TasksProvider>
        </ProjectsProvider>
      </SelectedProjectProvider>
    </UserProvider>
  );
}

export default App;
