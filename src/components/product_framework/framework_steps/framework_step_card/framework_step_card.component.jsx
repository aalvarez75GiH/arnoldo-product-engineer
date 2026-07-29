import {
  StepCard,
  StepHeader,
  StepNumber,
  StepTitle,
  StepDescription,
  StepVisual,
  StepImage,
  StepConnector,
} from "./framework_step_card.styles";

export const FrameworkStepCard = ({
  step,
  isLast,
  displayNumber,
  animationIndex,
  isVisible,
}) => {
  return (
    <StepCard $animationIndex={animationIndex} $isVisible={isVisible}>
      <StepHeader>
        <StepNumber $tone={step.tone}>{displayNumber}</StepNumber>

        <StepTitle>{step.title}</StepTitle>
      </StepHeader>

      <StepDescription>{step.description}</StepDescription>

      <StepVisual>
        <StepImage
          src={step.image}
          alt={step.imageAlt}
          $scale={step.imageScale}
          $maxWidth={step.imageMaxWidth}
          $offsetY={step.imageOffsetY}
          $rotation={step.imageRotation}
        />
      </StepVisual>

      {!isLast && <StepConnector aria-hidden="true">→</StepConnector>}
    </StepCard>
  );
};
