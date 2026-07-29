import {
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroHighlight,
  HeroDescription,
  HeroActions,
  HeroPrimaryButton,
  HeroSecondaryButton,
  HeroArrow,
} from "./ hero_copy.styles";

export const HeroCopy = () => {
  const handleWorkClick = () => {
    document
      .getElementById("selected-work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApproachClick = () => {
    document
      .getElementById("how-i-work")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroContent>
      <HeroEyebrow>I turn uncertainty into exceptional products</HeroEyebrow>

      <HeroTitle>
        Great products
        <br />
        begin
        <br />
        <HeroHighlight>before</HeroHighlight> code.
      </HeroTitle>

      <HeroDescription>
        Whether you have an idea or a clear plan, I help you validate, design,
        and build digital products people love to use.
      </HeroDescription>

      <HeroActions>
        <HeroPrimaryButton type="button" onClick={handleWorkClick}>
          Let&apos;s work together
          <HeroArrow aria-hidden="true">→</HeroArrow>
        </HeroPrimaryButton>

        <HeroSecondaryButton type="button" onClick={handleApproachClick}>
          See my approach
        </HeroSecondaryButton>
      </HeroActions>
    </HeroContent>
  );
};
