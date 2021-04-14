import styled from "styled-components";
import Button from "../Button/Button";

export const FooterMobilePattern = styled.img`
  width: 100%;
  position: relative;
  top: 6px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const FooterDesktopPattern = styled.img`
  width: 100%;
  position: relative;
  top: 6px;

  @media screen and (max-width: 766px) {
    display: none;
  }
`;

export const FooterWrapper = styled.section`
  background-color: var(--very-dark-cyan);
  padding: 7rem 0;
  color: white;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const FooterCol = styled.div`
  width: 100%;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;
//Newsletter
export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsletterTitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`;

export const NewsletterDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const EmailInput = styled.input`
  width: 100%;
  margin-bottom: 1;
  padding: 1.2rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-family: var(--body-font);
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid transparent;
`;
export const EmailErrorMessage = styled.span`
  color: red;
  margin: 1rem 0;
  align-self: flex-start;
`;

export const NewsletterSubmit = styled(Button)``;

//Social
export const Social = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialLogo = styled.div`
  margin-bottom: 1rem;
`;

export const SocialDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const SocialInfo = styled.p`
  margin-bottom: 1rem;
`;

export const Icon = styled.img`
  margin-right: 1rem;
`;

export const SocialIconList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 130px;
`;

export const SocialIconItem = styled.li``;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 2rem;

  &:hover {
    color: #03dbfc;
  }
`;
