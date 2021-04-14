import React from "react";
import Button from "../Button/Button";
import {
  IntroSectionContent,
  IntroSectionDescription,
  IntroSectionImage,
  IntroSectionTitle,
  IntroSectionWrapper,
} from "./IntroSection.styles";

import Fade from "react-reveal/Fade";

const IntroSection = () => {
  return (
    <IntroSectionWrapper>
      <Fade left>
        <IntroSectionContent>
          <IntroSectionTitle>
            Build The Community Your Fans Will Love
          </IntroSectionTitle>
          <IntroSectionDescription>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </IntroSectionDescription>
          <Button rounded>Get Started For Free</Button>
        </IntroSectionContent>
      </Fade>

      <Fade right>
        <IntroSectionImage
          src={require("../../images/screen-mockups.svg").default}
        />
      </Fade>
    </IntroSectionWrapper>
  );
};

export default IntroSection;
