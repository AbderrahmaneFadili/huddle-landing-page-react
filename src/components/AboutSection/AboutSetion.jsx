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
import Fade from "react-reveal/Fade";

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
    <>
      {/* Patterns */}
      {aboutTopMobilePattern && (
        <PatternMobileTop src={aboutTopMobilePattern} />
      )}
      {aboutTopDesktopPattern && (
        <PetternDesktopTop src={aboutTopDesktopPattern} />
      )}
      <AboutWrapper padding={padding} bgColor={bgColor}>
        <Container>
          <AboutContainer imgStart={imgStart}>
            <AboutCol>
              <Fade right>
                <AboutImg src={aboutImage} />
              </Fade>
            </AboutCol>
            <AboutCol>
              <Fade left>
                <AboutContent>
                  <AboutTitle>{aboutTitle}</AboutTitle>
                  <AboutDescription>{aboutDescription}</AboutDescription>
                </AboutContent>
              </Fade>
            </AboutCol>
          </AboutContainer>
        </Container>
      </AboutWrapper>
      {/* Patterns */}
      {aboutBottomMobilePattern && (
        <PatternMobileBottom src={aboutBottomMobilePattern} />
      )}
      {aboutBottomDesktopPattern && (
        <PatternDesktopBottom src={aboutBottomDesktopPattern} />
      )}
    </>
  );
};

export default AboutSetion;
