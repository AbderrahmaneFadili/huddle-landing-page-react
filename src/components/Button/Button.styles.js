import styled from "styled-components";

export const ButtonWrapper = styled.a`
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

  &:hover {
    opacity: 0.7;
  }
`;
