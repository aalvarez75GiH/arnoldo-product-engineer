import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: 680px;

  background: ${({ theme }) => theme.colors.background.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    min-height: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    min-height: 620px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
`;

export const HeroBackgroundImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -3;

  display: block;

  width: auto;
  height: 94%;
  max-width: none;

  object-fit: contain;
  object-position: right bottom;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    height: 91%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 96%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    height: 90%;
    right: -3%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
// export const HeroBackgroundImage = styled.img`
//   position: absolute;
//   inset: 0;
//   z-index: -3;

//   display: block;
//   width: 100%;
//   height: 100%;

//   object-fit: cover;
//   object-position: center center;

//   @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
//     object-position: center 44%;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
//     object-position: 58% center;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     object-position: 63% center;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

export const HeroBackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  pointer-events: none;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.background.primary} 0%,
    ${({ theme }) => theme.colors.background.primary} 38%,
    rgba(255, 254, 252, 0.98) 45%,
    rgba(255, 254, 252, 0.9) 50%,
    rgba(255, 254, 252, 0.68) 55%,
    rgba(255, 254, 252, 0.28) 61%,
    rgba(255, 254, 252, 0) 69%
  );

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.primary} 0%,
      ${({ theme }) => theme.colors.background.primary} 36%,
      rgba(255, 254, 252, 0.98) 44%,
      rgba(255, 254, 252, 0.86) 50%,
      rgba(255, 254, 252, 0.58) 56%,
      rgba(255, 254, 252, 0.2) 63%,
      rgba(255, 254, 252, 0) 70%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.primary} 0%,
      ${({ theme }) => theme.colors.background.primary} 34%,
      rgba(255, 254, 252, 0.98) 42%,
      rgba(255, 254, 252, 0.84) 49%,
      rgba(255, 254, 252, 0.5) 57%,
      rgba(255, 254, 252, 0.14) 65%,
      rgba(255, 254, 252, 0) 72%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.primary} 0%,
      ${({ theme }) => theme.colors.background.primary} 38%,
      rgba(255, 254, 252, 0.98) 46%,
      rgba(255, 254, 252, 0.78) 54%,
      rgba(255, 254, 252, 0.34) 63%,
      rgba(255, 254, 252, 0) 74%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
export const HeroImageBlend = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 44%;
  z-index: -1;

  width: 24%;

  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 252, 0.78) 0%,
    rgba(255, 254, 252, 0.42) 42%,
    rgba(255, 254, 252, 0) 74%
  );

  filter: blur(22px);
  pointer-events: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    left: 42%;
    width: 26%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    left: 41%;
    width: 29%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    left: 38%;
    width: 34%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
// export const HeroBackgroundOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   z-index: -2;

//   background: linear-gradient(
//     90deg,
//     rgba(255, 254, 252, 0.99) 0%,
//     rgba(255, 254, 252, 0.97) 25%,
//     rgba(255, 254, 252, 0.82) 40%,
//     rgba(255, 254, 252, 0.18) 58%,
//     rgba(255, 254, 252, 0) 72%
//   );

//   pointer-events: none;

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     background: linear-gradient(
//       90deg,
//       rgba(255, 254, 252, 0.99) 0%,
//       rgba(255, 254, 252, 0.96) 31%,
//       rgba(255, 254, 252, 0.72) 46%,
//       rgba(255, 254, 252, 0.08) 68%
//     );
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;

  width: min(calc(100% - 64px), 1440px);
  min-height: 680px;
  margin: 0 auto;
  padding: 72px 0 84px;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(calc(100% - 80px), 1600px);
    min-height: 720px;
    padding: 80px 0 92px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(calc(100% - 48px), 1200px);
    min-height: 620px;
    padding: 64px 0 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(calc(100% - 32px), 768px);
    min-height: auto;
    padding: 64px 0 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 24px), 480px);
    padding: 54px 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(calc(100% - 20px), 375px);
    padding-top: 48px;
  }
`;

export const HeroCopyColumn = styled.div`
  width: min(100%, 500px);

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(100%, 540px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(100%, 450px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100%, 620px);
  }
`;

export const HeroMobileVisual = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    width: 100%;
    overflow: hidden;
  }
`;

export const HeroMobileImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  min-height: 360px;
  max-height: 540px;

  object-fit: cover;
  object-position: 68% center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 320px;
    max-height: 430px;
    object-position: 67% center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    min-height: 290px;
    max-height: 380px;
    object-position: 66% center;
  }
`;
