import { useMemo, useRef, useState } from "react";
import { clientPaths, frameworkSteps } from "./product_framework.data";
import { useTheme } from "styled-components";

import { ClientPaths } from "./client_paths/client_paths.component";
import { FrameworkSteps } from "./framework_steps/framework_steps.component";

import {
  ProductFrameworkSection,
  ProductFrameworkContainer,
  ProductFrameworkHeader,
  ProductFrameworkEyebrow,
  ProductFrameworkTitle,
  ProductFrameworkDescription,
  ProductFrameworkContent,
  ProductFrameworkJourneyHeader,
  ProductFrameworkJourneyEyebrow,
  ProductFrameworkJourneyTitle,
  ProductFrameworkJourneyDescription,
} from "./product_framework.styles";

export const ProductFramework = () => {
  const theme = useTheme();
  const journeyRef = useRef(null);

  const handlePathSelect = (pathId) => {
    setSelectedPathId(pathId);
    const isMobileOrTablet = window.matchMedia(
      `(max-width: ${theme.breakpoints.tablet})`
    ).matches;
    if (!isMobileOrTablet) {
      return;
    }
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        journeyRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  const [selectedPathId, setSelectedPathId] = useState("idea");

  const selectedPath =
    clientPaths.find((path) => path.id === selectedPathId) ?? clientPaths[0];

  const visibleSteps = useMemo(() => {
    return selectedPath.stepIds
      .map((stepId) => frameworkSteps.find((step) => step.id === stepId))
      .filter(Boolean);
  }, [selectedPath]);

  return (
    <ProductFrameworkSection id="product-framework">
      <ProductFrameworkContainer>
        <ProductFrameworkHeader>
          <ProductFrameworkEyebrow>What I do</ProductFrameworkEyebrow>

          <ProductFrameworkTitle>
            Two starting points. One product partner.
          </ProductFrameworkTitle>

          <ProductFrameworkDescription>
            Choose the situation that best describes your idea, and see how I
            would help you move it forward.
          </ProductFrameworkDescription>
        </ProductFrameworkHeader>

        <ProductFrameworkContent>
          <ClientPaths
            selectedPathId={selectedPathId}
            onPathSelect={handlePathSelect}
          />

          <ProductFrameworkJourneyHeader ref={journeyRef}>
            <ProductFrameworkJourneyEyebrow>
              Your path
            </ProductFrameworkJourneyEyebrow>

            <ProductFrameworkJourneyTitle>
              {selectedPathId === "idea"
                ? "From idea to Impact."
                : "From validated direction to a polished, reliable product."}
            </ProductFrameworkJourneyTitle>

            <ProductFrameworkJourneyDescription>
              {selectedPathId === "idea"
                ? "We begin by understanding the opportunity and reducing risk before moving into design and engineering."
                : "We begin from your existing evidence and direction, then focus on product design, execution, launch, and iteration."}
            </ProductFrameworkJourneyDescription>
          </ProductFrameworkJourneyHeader>

          <FrameworkSteps
            key={selectedPathId}
            steps={visibleSteps}
            selectedPathId={selectedPathId}
          />
        </ProductFrameworkContent>
      </ProductFrameworkContainer>
    </ProductFrameworkSection>
  );
};
