import styled from "styled-components";
import { keyframes } from "styled-components";

const revealCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StepCard = styled.article`
  animation: ${revealCard} 500ms ease forwards;
  opacity: 0;

  animation-delay: ${({ $index }) => `${$index * 70}ms`};

  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 0;
  min-height: 370px;
  padding: 20px 18px 16px;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background.card};
  box-shadow: 0 16px 34px rgba(11, 38, 59, 0.055);

  overflow: visible;

  transform: translateY(${({ $offsetY = "0px" }) => $offsetY})
    rotate(${({ $rotation = "0deg" }) => $rotation})
    scale(${({ $scale = 1 }) => $scale});

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 410px;
    padding: 22px 20px 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 350px;
    padding: 18px 15px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 390px;
    padding: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 min(72vw, 330px);
    width: min(72vw, 330px);

    min-height: 390px;
    padding: 20px;

    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-basis: min(82vw, 320px);
    width: min(82vw, 320px);

    min-height: 380px;
    padding: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    flex-basis: min(84vw, 292px);
    width: min(84vw, 292px);

    min-height: 360px;
    padding: 17px;
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;

  width: 100%;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 7px;
  }
`;

export const StepNumber = styled.span`
  flex: 0 0 auto;

  color: ${({ $tone, theme }) =>
    $tone === "orange" ? theme.colors.brand.orange : theme.colors.brand.blue};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 1.22rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.08rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.02rem;
  }
`;

export const StepTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  white-space: normal;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    font-size: 0.78rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.68rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.78rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const StepDescription = styled.p`
  min-height: 66px;
  margin: 20px 0 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.76rem;
  font-weight: 400;
  line-height: 1.55;

  overflow-wrap: normal;
  word-break: normal;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 72px;
    font-size: 0.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 68px;
    margin-top: 17px;
    font-size: 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 58px;
    font-size: 0.79rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    margin-top: 18px;
    font-size: 0.84rem;
    line-height: 1.58;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.82rem;
  }
`;

export const StepVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;

  width: 100%;
  min-height: 205px;
  margin-top: 14px;
  padding: 4px;

  overflow: visible;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 235px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 185px;
    margin-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 220px;
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 235px;
    margin-top: 18px;
    padding: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 230px;
    margin-top: 16px;
    padding: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 215px;
  }
`;

export const StepImage = styled.img`
  display: block;

  width: auto;
  max-width: min(${({ $maxWidth = "220px" }) => $maxWidth}, 100%);
  max-height: 215px;

  object-fit: contain;
  object-position: center;

  transform: translateY(${({ $offsetY = "0px" }) => $offsetY})
    scale(${({ $scale = 1 }) => $scale});

  transform-origin: center;
  transition: transform ${({ theme }) => theme.transitions.normal};

  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    max-width: min(
      calc(${({ $maxWidth = "220px" }) => $maxWidth} + 20px),
      100%
    );
    max-height: 245px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: min(
      calc(${({ $maxWidth = "220px" }) => $maxWidth} - 25px),
      100%
    );
    max-height: 190px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: min(calc(${({ $maxWidth = "220px" }) => $maxWidth} + 10px), 90%);
    max-height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: min(calc(${({ $maxWidth = "220px" }) => $maxWidth} + 20px), 88%);
    max-height: 225px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: min(calc(${({ $maxWidth = "220px" }) => $maxWidth} + 12px), 90%);
    max-height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    max-width: min(${({ $maxWidth = "220px" }) => $maxWidth}, 90%);
    max-height: 205px;
  }
`;

export const StepConnector = styled.span`
  position: absolute;
  top: 72%;
  right: -22px;
  z-index: 4;

  display: grid;
  place-items: center;

  width: 28px;
  height: 28px;

  border-radius: ${({ theme }) => theme.radius.pill};

  background: ${({ theme }) => theme.colors.brand.orange};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;

  box-shadow: 0 8px 18px rgba(255, 107, 0, 0.2);

  transform: translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    right: -23px;
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: -18px;
    width: 24px;
    height: 24px;
    font-size: 0.78rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    display: none;
  }
`;

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
