import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyle from "./themes/GlobalStyle";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <h1>Hello App</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
