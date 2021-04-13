import styled from "styled-components";
//Pattern Mobile top
export const PatternMobileTop = styled.img`
  width: 100%;
  position: relative;
  top: -8rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
//Pattern Mobile Bottom
export const PatternMobileBottom = styled.img`
  width: 100%;
  position: relative;
  bottom: -5.5rem;
  height: 100px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

//Pattern Desktop top
export const PetternDesktopTop = styled.img`
  width: 100%;
  position: relative;
  top: -8rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//Pattern Desktop Bottom
export const PatternDesktopBottom = styled.img`
  width: 100%;
  position: relative;
  bottom: -7rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//About Wrapper
export const AboutWrapper = styled.section`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) => (padding ? "18rem 0" : "0")};
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  justify-content: space-between;
`;

export const AboutCol = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

export const AboutTitle = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutDescription = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
