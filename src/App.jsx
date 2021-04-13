import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyle from "./themes/GlobalStyle";
//Components
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <IntroSection />
      </>
    </ThemeProvider>
  );
};

export default App;
