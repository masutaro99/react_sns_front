import "./App.css";
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ApiContextProvider from "./context/ApiContext";

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
        <div className="container">
          <Main />
        </div>
      </MuiThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
