import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/content";
import { Register } from "./components/auth/register"
import { Login } from "./components/auth/login"
import { HashRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import {
  ProjectsProvider,
  SelectedProjectProvider,
  UserProvider,
  TasksProvider
} from "./context";

export function App() {

  const modes = [undefined, "darkmode", "skymode", "purplemode"]
  const [mode, setMode] = useState(0)

  return (
    <HashRouter >
      <Route render={({ location }) => (
        <UserProvider>
          <SelectedProjectProvider>
            <ProjectsProvider>
              <TasksProvider >
                <main data-testid="application" className={`App ${modes[mode]}`}>

                  <Header mode={mode} setMode={setMode} />
                  <TransitionGroup >
                    <CSSTransition key={location.pathname} timeout={1000}  classNames="move">
                    <Switch location = {location}>
                      <Route exact path="/" component={Content} />
                      <Route exact path="/signup" component={Register} />
                      <Route exact path="/login"  component={Login} />
                      <Route render={() => <h1 style={{ margin: "3rem auto", maxWidth: "900px" }}> 404 Not Found </h1>} />
                    </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </main>
              </TasksProvider>
            </ProjectsProvider>
          </SelectedProjectProvider>
        </UserProvider>
      )} >
      </Route>
    </HashRouter >
  );
}

export default App;
