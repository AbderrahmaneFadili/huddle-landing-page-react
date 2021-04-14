import styled from "styled-components";

export const ButtonWrapper = styled.button`
  text-decoration: none;
  background-color: ${({ outline }) =>
    outline ? "transparent" : "var(--pink)"};
  padding: 0.7rem 2.5rem;
  color: ${({ outline }) => (outline ? "var(--pink)" : "white")};
  border: 2px solid
    ${({ outline }) => (outline ? "var(--pink)" : "transparent")};
  border-radius: ${({ rounded }) => (rounded ? "7rem" : ".5rem")};
  font-size: 1.2rem;
  box-shadow: ${({ outline }) =>
    outline
      ? "1px 0px 24px -12px var(--pink)"
      : "1px 0px 24px -12px rgba(0, 0, 0, 0.62)"};
  text-transform: capitalize;
  transition: 0.4s all ease-in;
  text-align: center;
  cursor: pointer;
  position: relative;
  outline: none;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: 103%;
    height: 107%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: ${({ rounded }) => (rounded ? "7rem" : ".5rem")};
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (min-width: 300px) {
    padding: 0.7rem 2rem;
  }

  @media screen and (max-width: 290px) {
    padding: 0.7rem 1rem;
  }
`;
