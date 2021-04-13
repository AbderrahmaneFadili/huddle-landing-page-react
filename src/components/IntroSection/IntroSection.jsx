import React from "react";
import Button from "../Button/Button";
import {
  IntroSectionContent,
  IntroSectionDescription,
  IntroSectionImage,
  IntroSectionTitle,
  IntroSectionWrapper,
} from "./IntroSection.styles";

const IntroSection = () => {
  return (
    <IntroSectionWrapper>
      <IntroSectionContent>
        <IntroSectionTitle>
          Build The Community Your Fans Will Love
        </IntroSectionTitle>
        <IntroSectionDescription>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </IntroSectionDescription>
        <Button rounded>Get Started For Free</Button>
      </IntroSectionContent>
      <IntroSectionImage
        src={require("../../images/screen-mockups.svg").default}
      />
    </IntroSectionWrapper>
  );
};

export default IntroSection;
