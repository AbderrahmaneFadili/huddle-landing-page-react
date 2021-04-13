import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyle from "./themes/GlobalStyle";
import { aboutOne, aboutThree, aboutTwo } from "./AboutData";
//Components
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import CommunitiesSection from "./components/CommunitiesSection/CommunitiesSection";
import AboutSetion from "./components/AboutSection/AboutSetion";

const App = () => {
  console.log(aboutOne);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <IntroSection />
        <CommunitiesSection />
        <AboutSetion {...aboutOne} />
        <AboutSetion {...aboutTwo} />
        <AboutSetion {...aboutThree} />
      </>
    </ThemeProvider>
  );
};

export default App;
