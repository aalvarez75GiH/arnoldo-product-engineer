import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;

  background: radial-gradient(
      circle at 88% 16%,
      rgba(255, 92, 22, 0.045),
      transparent 34%
    ),
    radial-gradient(circle at 8% 78%, rgba(16, 86, 148, 0.032), transparent 36%),
    ${({ theme }) => theme.colors.background.primary};
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(390px, 430px) minmax(0, 1fr);
  align-items: start;
  gap: clamp(38px, 3.5vw, 58px);

  width: min(calc(100% - 64px), 1440px);
  min-height: calc(100vh - 118px);
  margin: 0 auto;
  padding: 58px 0 72px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: minmax(430px, 460px) minmax(0, 1fr);
    width: min(calc(100% - 80px), 1600px);
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: minmax(360px, 390px) minmax(0, 1fr);
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    width: min(calc(100% - 48px), 1200px);
    min-height: auto;
    gap: 56px;
    padding: 72px 0 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(calc(100% - 32px), 768px);
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 24px), 480px);
    gap: 40px;
    padding: 56px 0 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(calc(100% - 20px), 375px);
  }
`;

export const HeroVisual = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;
