import "./App.css";
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

import Navbar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Comic Neue",
  },
});

function App() {
  return (
    <ApiContextProvider>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <div className="App">
          <header className="App-header">
            <div>
              <h1>Home</h1>
            </div>
          </header>
        </div>
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
