import styled from "styled-components";

const getToneColor = (tone, theme) => {
  if (tone === "orange") {
    return theme.colors.brand.orange;
  }

  return theme.colors.brand.blue;
};

const getToneBackground = (tone) => {
  if (tone === "orange") {
    return "rgba(255, 100, 31, 0.07)";
  }

  return "rgba(47, 111, 179, 0.065)";
};

const getSelectedBackground = (tone) => {
  if (tone === "orange") {
    return "rgba(255, 100, 31, 0.115)";
  }

  return "rgba(47, 111, 179, 0.11)";
};

export const ClientPathsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;

  width: min(100%, 1120px);
  margin: 0 auto 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(100%, 1240px);
    gap: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 14px;
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const ClientPathCard = styled.button`
  position: relative;

  display: flex;
  align-items: flex-start;
  gap: 18px;

  width: 100%;
  min-width: 0;
  padding: 22px 24px;

  border: 1px solid
    ${({ $tone, $isSelected, theme }) => {
      if (!$isSelected) {
        return theme.colors.border.light;
      }

      return $tone === "orange"
        ? "rgba(255, 100, 31, 0.62)"
        : "rgba(47, 111, 179, 0.62)";
    }};

  border-radius: 18px;

  background: ${({ $tone, $isSelected }) =>
    $isSelected ? getSelectedBackground($tone) : getToneBackground($tone)};

  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "0 20px 44px rgba(15, 39, 58, 0.1)"
      : "0 12px 30px rgba(15, 39, 58, 0.045)"};

  text-align: left;
  cursor: pointer;

  transform: translateY(0);

  transition: transform 180ms ease, border-color 180ms ease,
    background 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ $tone, theme }) => getToneColor($tone, theme)}33;
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;
    padding: 17px;
    border-radius: 15px;
  }
`;

export const ClientPathIcon = styled.span`
  display: grid;
  place-items: center;
  flex: 0 0 auto;

  width: 64px;
  height: 64px;

  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;

export const ClientPathIconImage = styled.img`
  display: block;
  width: 38px;
  height: 38px;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 29px;
    height: 29px;
  }
`;

export const ClientPathContent = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const ClientPathSelectionLabel = styled.span`
  margin-bottom: 6px;

  color: ${({ $tone, $isSelected, theme }) =>
    $isSelected ? getToneColor($tone, theme) : theme.colors.text.muted};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.67rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const ClientPathTitle = styled.span`
  color: ${({ $tone, theme }) => getToneColor($tone, theme)};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.08rem;
  font-weight: 750;
  line-height: 1.3;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.96rem;
  }
`;

export const ClientPathDescription = styled.span`
  max-width: 46ch;
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.58;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 6px;
    font-size: 0.84rem;
  }
`;
