import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import indigo from "@material-ui/core/colors/indigo"

import Home from "./components/Home"
import Dashboard from "./components/Dashboard"

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336"
    },
  },
  typography: {
    fontFamily: "Comic Neue",
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
