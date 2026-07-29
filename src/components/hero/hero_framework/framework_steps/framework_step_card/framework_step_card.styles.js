import styled from "styled-components";

const getStepColor = (tone, theme) =>
  tone === "orange" ? theme.colors.brand.orange : theme.colors.brand.blue;

export const StepCard = styled.article`
  position: relative;

  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 320px;
  padding: 18px 15px 15px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 16px 34px rgba(15, 39, 58, 0.06);
  backdrop-filter: blur(14px);

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 340px;
    padding: 20px 17px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 290px;
    padding: 15px 12px 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 300px;
    padding: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 270px;
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 245px;
    padding: 14px;
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StepNumber = styled.span`
  color: ${({ $tone, theme }) => getStepColor($tone, theme)};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 1.22rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.02rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.98rem;
  }
`;

export const StepTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.018em;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.76rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.64rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.7rem;
  }
`;

export const StepDescription = styled.p`
  min-height: 72px;
  margin: 18px 0 20px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  font-weight: 500;
  line-height: 1.6;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 76px;
    margin-top: 20px;
    margin-bottom: 22px;
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 62px;
    margin: 14px 0 15px;
    font-size: 0.67rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 64px;
    font-size: 0.74rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 56px;
    font-size: 0.72rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: auto;
    margin: 12px 0 18px;
    font-size: 0.68rem;
  }
`;

export const StepVisual = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;

  min-height: 150px;
  margin-top: auto;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 175px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 132px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 126px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 135px;
  }
`;

export const StepImage = styled.img`
  display: block;

  width: auto;
  max-width: 155px;
  max-height: 155px;

  object-fit: contain;
  object-position: center bottom;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: 180px;
    max-height: 175px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 135px;
    max-height: 130px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 160px;
    max-height: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 145px;
    max-height: 125px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 175px;
    max-height: 140px;
  }
`;

export const StepConnector = styled.span`
  position: absolute;
  top: 56%;
  right: -18px;
  z-index: 3;

  color: ${({ theme }) => theme.colors.brand.orange};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;

  transform: translateY(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: -14px;
    font-size: 0.82rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

/* Discover */

export const ResearchVisual = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 15px;

  width: 100%;
  height: 95px;
`;

export const ResearchPerson = styled.span`
  position: relative;

  width: 38px;
  height: 62px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-top: 0;
  border-radius: 18px 18px 8px 8px;

  &::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 8px;

    width: 20px;
    height: 20px;

    border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background.primary};
  }

  &:last-child {
    transform: scaleX(-1);
  }
`;

export const ResearchBubble = styled.span`
  position: absolute;
  top: 5px;
  left: 50%;

  width: 34px;
  height: 20px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 50%;

  transform: translateX(-50%);

  &::after {
    content: "•••";

    position: absolute;
    inset: 0;

    display: grid;
    place-items: center;

    color: ${({ theme }) => theme.colors.brand.navy};
    font-size: 0.55rem;
    letter-spacing: 1px;
  }
`;

/* Validate */

export const ValidationVisual = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;
`;

export const ValidationBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  width: 82px;
  height: 78px;
  padding: 8px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 4px;
`;

export const ValidationNote = styled.span`
  display: block;
  min-height: 20px;

  border-radius: 2px;
  background: ${({ theme }) => theme.colors.brand.orangeSoft};

  &:nth-child(2) {
    background: rgba(31, 128, 181, 0.18);
  }

  &:nth-child(3) {
    grid-column: span 2;
    background: rgba(255, 107, 0, 0.18);
  }
`;

/* Design */

export const DesignVisual = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;

  width: 86px;
`;

export const DesignScreen = styled.span`
  position: relative;

  display: block;
  height: 45px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 3px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 5px;

    height: 2px;

    background: rgba(15, 39, 58, 0.3);
  }

  &::before {
    top: 9px;
    width: 60%;
  }

  &::after {
    top: 16px;
    width: 38%;
  }

  &:last-child {
    grid-column: span 2;
    height: 32px;
  }
`;

/* Prototype */

export const PrototypeVisual = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
`;

export const PrototypePhone = styled.div`
  position: relative;

  width: 52px;
  height: 100px;
  padding: 7px 5px;

  border: 2px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 12px;

  background: ${({ theme }) => theme.colors.background.primary};

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 50%;

    width: 14px;
    height: 2px;

    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.brand.navy};

    transform: translateX(-50%);
  }
`;

export const PrototypeScreen = styled.span`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: 7px;

  background: linear-gradient(
      145deg,
      transparent 54%,
      rgba(31, 128, 181, 0.22) 55%
    ),
    linear-gradient(35deg, rgba(255, 107, 0, 0.16) 30%, transparent 31%),
    ${({ theme }) => theme.colors.background.warm};
`;

/* Engineer */

export const EngineeringVisual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  width: 88px;
  height: 100px;
  padding: 15px 12px;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors.brand.navy};
  box-shadow: 0 10px 20px rgba(15, 39, 58, 0.16);
`;

export const CodeLine = styled.span`
  display: block;
  width: ${({ $width }) => $width};
  height: 3px;

  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.brand.orange};

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.brand.blue};
  }
`;

/* Launch */

export const LaunchVisual = styled.div`
  position: relative;

  display: grid;
  place-items: center;

  width: 90px;
  height: 105px;
`;

export const RocketBody = styled.div`
  position: relative;

  width: 42px;
  height: 68px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 50% 50% 35% 35%;

  transform: rotate(35deg);

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 5px;

    width: 16px;
    height: 25px;

    border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  }

  &::before {
    left: -13px;
    border-radius: 15px 0 0 15px;
  }

  &::after {
    right: -13px;
    border-radius: 0 15px 15px 0;
  }
`;

export const RocketWindow = styled.span`
  position: absolute;
  top: 16px;
  left: 50%;

  width: 13px;
  height: 13px;

  border: 1.5px solid ${({ theme }) => theme.colors.brand.navy};
  border-radius: 50%;

  transform: translateX(-50%);
`;

export const RocketFlame = styled.span`
  position: absolute;
  right: 10px;
  bottom: 5px;

  width: 18px;
  height: 30px;

  border-radius: 50% 50% 50% 0;
  background: ${({ theme }) => theme.colors.brand.orangeSoft};

  transform: rotate(35deg);
`;
