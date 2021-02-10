import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
