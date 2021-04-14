import React from "react";
import { ButtonWrapper } from "./Button.styles";

const Button = ({
  type,
  onClick,
  onSubmit,
  children,
  href,
  outline,
  rounded,
}) => {
  return (
    <ButtonWrapper
      onSubmit={onSubmit}
      onClick={onClick}
      href={href}
      outline={outline}
      rounded={rounded}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
