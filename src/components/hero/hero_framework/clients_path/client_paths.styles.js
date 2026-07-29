import styled from "styled-components";

const getToneColor = (tone, theme) => {
  switch (tone) {
    case "blue":
      return "#2F6FB3";

    case "orange":
      return "#FF641F";

    default:
      return theme.colors.brand.primary;
  }
};

const getToneBackground = (tone) => {
  if (tone === "orange") {
    return "rgba(255, 107, 44, 0.1)";
  }
  if (tone === "blue") {
    return "rgba(44, 145, 184, 0.08)";
  }

  return "rgba(16, 27, 45, 0.08)";
};

export const ClientPathsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 38px;
  width: 100%;
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
  }
`;

export const ClientPathCard = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
  padding: 20px 22px;

  border-radius: 16px;

  background: ${({ $tone }) => getToneBackground($tone)};
  /* background: rgba(255, 255, 255, 0.78); */
  box-shadow: 0 16px 38px rgba(16, 39, 58, 0.055);
  backdrop-filter: blur(14px);

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    gap: 18px;
    padding: 22px 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 14px;
    padding: 17px 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 13px;
    padding: 16px;
    border-radius: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: 14px;
  }
`;

export const ClientPathIcon = styled.div`
  display: grid;
  place-items: center;
  flex: 0 0 auto;

  width: 40px;
  height: 40px;

  border-radius: 11px;

  background: transparent;
  color: ${({ $tone, theme }) => getToneColor($tone, theme)};

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: 84px;
    height: 70px;
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 37px;
    height: 37px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
    height: 35px;
    border-radius: 9px;
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 33px;
    height: 33px;
  }
`;

export const ClientPathContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 5px;
  }
`;

export const ClientPathTitle = styled.h3`
  margin: 0;

  color: ${({ $tone, theme }) => getToneColor($tone, theme)};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 750;
  line-height: 1.25;
  letter-spacing: 0.025em;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.92rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.81rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.78rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.74rem;
  }
`;

export const ClientPathDescription = styled.p`
  margin: 0;
  max-width: 34ch;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.58;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 36ch;
    font-size: 0.94rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.82rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: none;
    font-size: 0.8rem;
    line-height: 1.52;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: 0.76rem;
  }
`;

export const ClientPathConnector = styled.span`
  position: absolute;
  top: 50%;
  right: -39px;
  width: 38px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 92, 22, 0.55),
    rgba(16, 39, 58, 0.25)
  );
  transform: translateY(-50%);
  pointer-events: none;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    content: "";
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
    background: #ff5c16;
  }

  &::after {
    right: 0;
    background: #10273a;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
