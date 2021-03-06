import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from './layout/Navbar';
import Dashboard from "./dashboard/Dashboard"
import ProjectDetails from './project/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './project/CrateProject';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />

        </Switch>

      </div>
    </BrowserRouter>


  );
}

export default App;
