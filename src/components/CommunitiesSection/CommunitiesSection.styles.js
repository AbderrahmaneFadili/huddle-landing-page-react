import styled from "styled-components";

export const CommunitiesWrapper = styled.section`
  padding: 3rem 0 14rem;
`;

export const CommunitiesContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Community = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2.5rem 0;
`;

export const CommunityIcon = styled.img`
  width: 35px;
`;

export const CommunityCount = styled.h1`
  color: var(--very-dark-cyan);
  font-size: 6rem;
`;

export const CommunityInfo = styled.p`
  color: var(--very-dark-cyan);
  opacity: 0.5;
  font-size: 1.3rem;
  text-align: center;
`;
