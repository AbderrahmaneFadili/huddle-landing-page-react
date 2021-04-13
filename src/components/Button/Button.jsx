import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({ children, href, outline, rounded }) => {
  return (
    <ButtonWrapper href={href} outline={outline} rounded={rounded}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
