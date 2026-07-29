import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  width: min(calc(100% - 64px), 1440px);
  min-height: 118px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    width: min(calc(100% - 80px), 1600px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: min(calc(100% - 48px), 1200px);
    min-height: 104px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(calc(100% - 32px), 768px);
    min-height: 88px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 24px), 480px);
    min-height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: min(calc(100% - 20px), 375px);
  }
`;

export const BrandLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.55rem, 2.3vw, 2.25rem);
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  letter-spacing: -0.045em;
`;

export const BrandRole = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.0625rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.brand.blue};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.88rem;
  }
`;
// export const BrandRole = styled.span`
//   font-family: ${({ theme }) => theme.fonts.body};
//   font-size: 0.96rem;
//   font-weight: ${({ theme }) => theme.fontWeights.regular};
//   line-height: 1.4;
//   color: ${({ theme }) => theme.colors.brand.blue};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     font-size: 0.86rem;
//   }
// `;

export const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 2.8vw, 2.75rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavigationLink = styled.a`
  position: relative;
  padding: 0.6rem 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.97rem;
  font-weight: 500;
  line-height: 1;

  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 1px;
    background: ${({ theme }) => theme.colors.brand.orange};

    transform: scaleX(0);
    transform-origin: right;

    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.brand.orange};

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.orange};
    outline-offset: 5px;
    border-radius: ${({ theme }) => theme.radius.sm};
  }
`;
// export const NavigationLink = styled.a`
//   position: relative;

//   padding: 0.5rem 0;

//   color: ${({ theme }) => theme.colors.text.primary};
//   font-size: 0.94rem;
//   font-weight: ${({ theme }) => theme.fontWeights.medium};
//   line-height: 1;

//   transition: color ${({ theme }) => theme.transitions.fast},
//     transform ${({ theme }) => theme.transitions.fast};

//   &::after {
//     content: "";
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     left: 0;

//     height: 1px;

//     background: ${({ theme }) => theme.colors.brand.orange};

//     transform: scaleX(0);
//     transform-origin: right;
//     transition: transform ${({ theme }) => theme.transitions.normal};
//   }

//   &:hover {
//     color: ${({ theme }) => theme.colors.brand.orange};

//     &::after {
//       transform: scaleX(1);
//       transform-origin: left;
//     }
//   }

//   &:focus-visible {
//     outline: 2px solid ${({ theme }) => theme.colors.brand.orange};
//     outline-offset: 5px;
//     border-radius: ${({ theme }) => theme.radius.sm};
//   }
// `;

export const HeaderCta = styled.a`
  min-height: 48px;
  padding: 0 1.35rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.brand.orange};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-size: 0.94rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;

  box-shadow: 0 10px 24px rgba(255, 107, 0, 0.18);

  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    background: #ed6200;
    box-shadow: 0 14px 30px rgba(255, 107, 0, 0.24);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.orangeSoft};
    outline-offset: 3px;
  }
`;

export const MobileMenuButton = styled.button`
  width: 46px;
  height: 46px;
  padding: 0;

  display: none;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  transition: border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.orange};
    background: ${({ theme }) => theme.colors.brand.orangeSoft};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.orangeSoft};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

export const MobileMenuIcon = styled.span`
  position: relative;

  width: 20px;
  height: 14px;

  span {
    position: absolute;
    left: 0;

    width: 100%;
    height: 1.5px;

    border-radius: ${({ theme }) => theme.radius.pill};
    background: ${({ theme }) => theme.colors.brand.navy};

    transition: top ${({ theme }) => theme.transitions.normal},
      transform ${({ theme }) => theme.transitions.normal};
  }

  span:first-child {
    top: 3px;
  }

  span:last-child {
    top: 10px;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span:first-child {
        top: 6px;
        transform: rotate(45deg);
      }

      span:last-child {
        top: 6px;
        transform: rotate(-45deg);
      }
    `}
`;

export const MobileNavigation = styled.nav`
  position: absolute;
  top: calc(100% - 4px);
  right: 16px;
  left: 16px;

  padding: 1rem;

  display: none;
  flex-direction: column;
  gap: 0.35rem;

  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.radius.md};

  background: rgba(255, 254, 252, 0.98);
  box-shadow: ${({ theme }) => theme.shadows.card};
  backdrop-filter: blur(18px);

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);

  transition: opacity ${({ theme }) => theme.transitions.normal},
    visibility ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 12px;
    left: 12px;
  }
`;

export const MobileNavigationLink = styled.a`
  padding: 0.9rem 1rem;

  border-radius: ${({ theme }) => theme.radius.sm};

  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  transition: color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.orange};
    background: ${({ theme }) => theme.colors.background.warm};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand.orange};
    outline-offset: 2px;
  }
`;

export const MobileCta = styled.a`
  min-height: 48px;
  margin-top: 0.5rem;
  padding: 0 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.sm};

  background: ${({ theme }) => theme.colors.brand.orange};
  color: ${({ theme }) => theme.colors.text.inverse};

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.brand.orangeSoft};
    outline-offset: 3px;
  }
`;
