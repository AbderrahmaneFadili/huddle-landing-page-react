import React from "react";
import { HeaderContainer, HeaderWrapper, Logo } from "./Header.styles";
import { Container } from "../../themes/GlobalStyle";
import Button from "../Button/Button";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <Logo src={require("../../images/logo.svg").default} />
          <Button href="#" outline rounded>
            Try it free
          </Button>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
