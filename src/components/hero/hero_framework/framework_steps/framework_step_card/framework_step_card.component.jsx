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

export const FrameworkStepCard = ({ step, isLast }) => {
  return (
    <StepCard>
      <StepHeader>
        <StepNumber $tone={step.tone}>{step.number}</StepNumber>
        <StepTitle>{step.title}</StepTitle>
      </StepHeader>

      <StepDescription>{step.description}</StepDescription>

      <StepVisual>
        <StepImage src={step.image} alt={step.imageAlt} />
      </StepVisual>

      {!isLast && <StepConnector aria-hidden="true">→</StepConnector>}
    </StepCard>
  );
};
