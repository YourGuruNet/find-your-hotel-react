import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme/theme";
import Home from "../../pages/Home";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
