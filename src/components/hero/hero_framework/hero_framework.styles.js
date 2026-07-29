import styled from "styled-components";

export const HeroFrameworkContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`;
