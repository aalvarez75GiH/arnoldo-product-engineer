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

  const handleProcessClick = () => {
    document
      .getElementById("product-framework")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroContent>
      <HeroEyebrow>Hi, I&apos;m Arnoldo — Product Engineer</HeroEyebrow>
      {/* <HeroEyebrow>I turn uncertainty into exceptional products</HeroEyebrow> */}

      <HeroTitle>
        Great products
        <br />
        begin
        <br />
        <HeroHighlight>before</HeroHighlight> code.
      </HeroTitle>

      <HeroDescription>
        I help people and businesses validate ideas and build digital products
        that people will love to use.
      </HeroDescription>

      <HeroActions>
        <HeroPrimaryButton type="button" onClick={handleWorkClick}>
          Let&apos;s work together
          <HeroArrow aria-hidden="true">→</HeroArrow>
        </HeroPrimaryButton>

        <HeroSecondaryButton type="button" onClick={handleProcessClick}>
          Explore my process
        </HeroSecondaryButton>
      </HeroActions>
    </HeroContent>
  );
};
