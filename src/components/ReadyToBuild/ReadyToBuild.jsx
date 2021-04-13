import React from "react";
import Button from "../Button/Button";
import {
  ReadyToBuildWrapper,
  ReadyToBuildTitle,
  ReadyToBuildContainer,
} from "./ReadyToBuild.styles";
const ReadyToBuild = () => {
  return (
    <ReadyToBuildWrapper>
      <ReadyToBuildContainer>
        <ReadyToBuildTitle>Ready To Build Your Community?</ReadyToBuildTitle>
        <Button rounded>Get Started For Free</Button>
      </ReadyToBuildContainer>
    </ReadyToBuildWrapper>
  );
};

export default ReadyToBuild;
