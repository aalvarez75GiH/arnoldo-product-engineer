import { ClientPaths } from "./clients_path/client_paths.component";
import { FrameworkSteps } from "./framework_steps/framework_steps.component";

import { HeroFrameworkContainer } from "./hero_framework.styles";

export const HeroFramework = () => {
  return (
    <HeroFrameworkContainer>
      <ClientPaths />
      <FrameworkSteps />
    </HeroFrameworkContainer>
  );
};
