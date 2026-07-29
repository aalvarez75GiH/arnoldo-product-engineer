import { useEffect, useRef, useState } from "react";

import { FrameworkStepCard } from "./framework_step_card/framework_step_card.component";

import { FrameworkStepsGrid } from "./framework_steps.styles";

export const FrameworkSteps = ({ steps, selectedPathId }) => {
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (!gridElement) {
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(gridElement);

    return () => {
      observer.disconnect();
    };
  }, [selectedPathId]);

  return (
    <FrameworkStepsGrid
      ref={gridRef}
      $visibleSteps={steps.length}
      aria-live="polite"
    >
      {steps.map((step, index) => (
        <FrameworkStepCard
          key={step.id}
          step={step}
          isLast={index === steps.length - 1}
          displayNumber={index + 1}
          animationIndex={index}
          isVisible={isVisible}
        />
      ))}
    </FrameworkStepsGrid>
  );
};

// import { FrameworkStepCard } from "./framework_step_card/framework_step_card.component";

// import { FrameworkStepsGrid } from "./framework_steps.styles";

// export const FrameworkSteps = ({ steps, selectedPathId }) => {
//   return (
//     <FrameworkStepsGrid
//       key={selectedPathId}
//       $visibleSteps={steps.length}
//       aria-live="polite"
//     >
//       {steps.map((step, index) => (
//         <FrameworkStepCard
//           key={step.id}
//           step={step}
//           isLast={index === steps.length - 1}
//           displayNumber={index + 1}
//         />
//       ))}
//     </FrameworkStepsGrid>
//   );
// };
