import React from "react";
import { Container } from "../../themes/GlobalStyle";
import {
  AboutWrapper,
  PatternDesktopBottom,
  PetternDesktopTop,
  PatternMobileTop,
  PatternMobileBottom,
  AboutCol,
  AboutImg,
  AboutContainer,
  AboutTitle,
  AboutContent,
  AboutDescription,
} from "./AboutSection.styles";

const AboutSetion = ({
  imgStart,
  aboutImage,
  aboutTitle,
  aboutDescription,
  aboutTopMobilePattern,
  aboutTopDesktopPattern,
  aboutBottomMobilePattern,
  aboutBottomDesktopPattern,
  bgColor,
  padding,
}) => {
  return (
    <AboutWrapper padding={padding} bgColor={bgColor}>
      {/* Patterns */}
      {aboutTopMobilePattern && (
        <PatternMobileTop src={aboutTopMobilePattern} />
      )}
      {aboutTopDesktopPattern && (
        <PetternDesktopTop src={aboutTopDesktopPattern} />
      )}
      <Container>
        <AboutContainer imgStart={imgStart}>
          <AboutCol>
            <AboutImg src={aboutImage} />
          </AboutCol>
          <AboutCol>
            <AboutContent>
              <AboutTitle>{aboutTitle}</AboutTitle>
              <AboutDescription>{aboutDescription}</AboutDescription>
            </AboutContent>
          </AboutCol>
        </AboutContainer>
      </Container>
      {/* Patterns */}
      {aboutBottomMobilePattern && (
        <PatternMobileBottom src={aboutBottomMobilePattern} />
      )}
      {aboutBottomDesktopPattern && (
        <PatternDesktopBottom src={aboutBottomDesktopPattern} />
      )}
    </AboutWrapper>
  );
};

export default AboutSetion;
