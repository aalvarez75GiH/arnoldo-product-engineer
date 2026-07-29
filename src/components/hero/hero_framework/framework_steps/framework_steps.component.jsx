import { frameworkSteps } from "../framework.data";
import { FrameworkStepCard } from "./framework_step_card/framework_step_card.component";

import { FrameworkStepsGrid } from "./framework_steps.styles";

export const FrameworkSteps = () => {
  return (
    <FrameworkStepsGrid>
      {frameworkSteps.map((step, index) => (
        <FrameworkStepCard
          key={step.id}
          step={step}
          isLast={index === frameworkSteps.length - 1}
        />
      ))}
    </FrameworkStepsGrid>
  );
};
