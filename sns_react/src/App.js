import './App.css';
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

import Navbar from "./components/Navbar";
import Registration from "./components/auth/Registration";

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
    <Navbar />
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Home</h1>
           <Registration />
        </div>
      </header>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
