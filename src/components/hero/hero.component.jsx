import { HeroCopy } from "./hero_copy/hero_copy.component";
import { HeroFramework } from "./hero_framework/hero_framework.component";
import { HeroWorkspace } from "./hero_workspace/hero_workspace.component";

import { HeroSection, HeroContainer, HeroVisual } from "./hero.styles";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroCopy />

        <HeroVisual>
          <HeroFramework />
          <HeroWorkspace />
        </HeroVisual>
      </HeroContainer>
    </HeroSection>
  );
};
