import styled from "styled-components";

export const ProductFrameworkSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const ProductFrameworkContainer = styled.div`
  width: min(calc(100% - 64px), 1440px);
  margin: 0 auto;
  padding: 96px 0 104px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(calc(100% - 80px), 1600px);
    padding: 112px 0 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(calc(100% - 48px), 1200px);
    padding: 88px 0 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(calc(100% - 32px), 768px);
    padding: 76px 0 84px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 24px), 480px);
    padding: 64px 0 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(calc(100% - 20px), 375px);
  }
`;

export const ProductFrameworkHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 760px;
  margin: 30px auto 0;

  scroll-margin-top: 28px;

  text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 680px;
  margin: 0 auto 48px;
  text-align: center; */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 30px;
    scroll-margin-top: 20px;
  }
  /* @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
    margin-bottom: 32px;
    text-align: left;
  } */
`;

export const ProductFrameworkEyebrow = styled.p`
  margin: 0 0 12px;

  color: ${({ theme }) => theme.colors.brand.orange};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.72rem;
  }
`;

export const ProductFrameworkTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 4vw, 4rem);
  font-weight: 750;
  line-height: 1.04;
  letter-spacing: -0.045em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.1rem, 10vw, 3rem);
  }
`;

export const ProductFrameworkDescription = styled.p`
  max-width: 56ch;
  margin: 20px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.05rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 16px;
    font-size: 0.96rem;
  }
`;

export const ProductFrameworkContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;
export const ProductFrameworkJourneyHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 760px;
  margin: 30px auto 0;

  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    margin-top: 28px;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 24px;
  }
`;

export const ProductFrameworkJourneyEyebrow = styled.p`
  margin: 0 0 10px;

  color: ${({ theme }) => theme.colors.brand.orange};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ProductFrameworkJourneyTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.7rem, 2.8vw, 2.65rem);
  font-weight: 750;
  line-height: 1.12;
  letter-spacing: -0.035em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.65rem;
  }
`;

export const ProductFrameworkJourneyDescription = styled.p`
  max-width: 62ch;
  margin: 14px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.98rem;
  line-height: 1.65;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;
