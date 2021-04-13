import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import GlobalStyle from "./themes/GlobalStyle";
//Components
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import CommunitiesSection from "./components/CommunitiesSection/CommunitiesSection";
//Top Pattern
const TopPatternMobile = styled.img`
  width: 100%;

  @media screen and (min-width: 968px) {
    display: none;
  }
`;

const TopPatternDesktop = styled.img`
  width: 100%;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <IntroSection />
        <CommunitiesSection />
        <TopPatternMobile
          src={require("./images/bg-section-top-mobile-1.svg").default}
        />
        <TopPatternDesktop
          src={require("./images/bg-section-top-desktop-1.svg").default}
        />
      </>
    </ThemeProvider>
  );
};

export default App;
