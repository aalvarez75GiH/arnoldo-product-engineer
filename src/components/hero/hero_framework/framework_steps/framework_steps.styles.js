import styled from "styled-components";

export const FrameworkStepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;

  width: 100%;
  margin-top: 14px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    gap: 16px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`;
