import styled from "styled-components";

const getAccentColor = (theme) =>
  theme.colors?.brand?.accent ||
  theme.colors?.brand?.orange ||
  theme.colors?.accent ||
  "#ff5a0a";

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 620px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const HeroEyebrow = styled.p`
  margin: 0 0 20px;

  color: ${({ theme }) => getAccentColor(theme)};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 18px;
    font-size: 0.78rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 310px;
    margin-bottom: 16px;
    font-size: 0.71rem;
    letter-spacing: 0.1em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: 270px;
    font-size: 0.68rem;
  }
`;

export const HeroTitle = styled.h1`
  width: 100%;
  max-width: 520px;
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3.6rem, 4.45vw, 4.75rem);
  font-weight: 750;
  line-height: 1;
  letter-spacing: -0.048em;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 550px;
    font-size: clamp(3.9rem, 4vw, 5rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 470px;
    font-size: clamp(3.15rem, 4.25vw, 4.2rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 660px;
    font-size: clamp(3.7rem, 8vw, 5.4rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 580px;
    font-size: clamp(3.2rem, 10vw, 4.7rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 440px;
    font-size: clamp(2.8rem, 13vw, 3.85rem);
    line-height: 1.01;
    letter-spacing: -0.043em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: 355px;
    font-size: 2.72rem;
  }
`;

export const HeroHighlight = styled.span`
  color: ${({ theme }) => getAccentColor(theme)};
`;

export const HeroDescription = styled.p`
  max-width: 36ch;
  margin: 34px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.08rem;
  font-weight: 400;
  line-height: 1.72;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 1.12rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 35ch;
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 40ch;
    margin-top: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 36ch;
    margin-top: 24px;
    font-size: 0.98rem;
    line-height: 1.68;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.93rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 18px;
    margin-top: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    margin-top: 28px;
  }
`;

export const HeroPrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  min-height: 56px;
  padding: 0 26px;

  border: 1px solid ${({ theme }) => getAccentColor(theme)};
  border-radius: 9px;

  background: ${({ theme }) => getAccentColor(theme)};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.98rem;
  font-weight: 700;

  cursor: pointer;

  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(255, 92, 22, 0.22);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 92, 22, 0.25);
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 53px;
    padding: 0 23px;
    font-size: 0.92rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-height: 54px;
  }
`;

export const HeroArrow = styled.span`
  font-size: 1.15rem;
  font-weight: 400;
  line-height: 1;
`;

export const HeroSecondaryButton = styled.button`
  min-height: 56px;
  padding: 0;

  border: 0;
  background: transparent;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  transition: color 180ms ease, transform 180ms ease;

  &:hover {
    color: ${({ theme }) => getAccentColor(theme)};
    transform: translateX(2px);
  }

  &:focus-visible {
    outline: 3px solid rgba(16, 27, 45, 0.14);
    outline-offset: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 53px;
    font-size: 0.94rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-height: 54px;
    padding: 0 20px;

    border: 1px solid ${({ theme }) => theme.colors.border.light};
    border-radius: 9px;
  }
`;
