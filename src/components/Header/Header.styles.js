import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 100%;

  @media screen and (max-width: 360px) {
    width: 100px;
  }
`;
