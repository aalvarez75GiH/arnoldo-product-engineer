import ArnoldoWorkspaceHero from "../../assets/images/hero/backgrounds/hero_bg_premium.png";

import { HeroCopy } from "./hero_copy/hero_copy.component";

import {
  HeroSection,
  HeroBackgroundImage,
  HeroBackgroundOverlay,
  HeroContainer,
  HeroCopyColumn,
  HeroMobileVisual,
  HeroMobileImage,
  HeroImageBlend,
} from "./hero.styles";

export const Hero = () => {
  return (
    <HeroSection>
      <HeroBackgroundImage
        src={ArnoldoWorkspaceHero}
        alt=""
        aria-hidden="true"
      />

      <HeroBackgroundOverlay aria-hidden="true" />
      <HeroImageBlend />

      <HeroContainer>
        <HeroCopyColumn>
          <HeroCopy />
        </HeroCopyColumn>
      </HeroContainer>

      <HeroMobileVisual>
        <HeroMobileImage
          src={ArnoldoWorkspaceHero}
          alt="Arnoldo Alvarez working on product designs at his desk"
        />
      </HeroMobileVisual>
    </HeroSection>
  );
};
