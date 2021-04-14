import React from "react";
import Button from "../Button/Button";
import {
  ReadyToBuildWrapper,
  ReadyToBuildTitle,
  ReadyToBuildContainer,
} from "./ReadyToBuild.styles";
import Fade from "react-reveal/Fade";

const ReadyToBuild = () => {
  return (
    <ReadyToBuildWrapper>
      <Fade bottom>
        <ReadyToBuildContainer>
          <ReadyToBuildTitle>Ready To Build Your Community?</ReadyToBuildTitle>
          <Button rounded>Get Started For Free</Button>
        </ReadyToBuildContainer>
      </Fade>
    </ReadyToBuildWrapper>
  );
};

export default ReadyToBuild;
