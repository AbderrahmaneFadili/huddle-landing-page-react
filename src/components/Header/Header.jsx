import React from "react";
import { HeaderContainer, HeaderWrapper, Logo } from "./Header.styles";
import { Container } from "../../themes/GlobalStyle";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          {/* Top Fade Animation */}
          <Fade top>
            <Logo src={require("../../images/logo.svg").default} />
          </Fade>
          {/* Top Fade Animation */}
          <Fade top top>
            <Button href="#" outline rounded>
              Try it free
            </Button>
          </Fade>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
