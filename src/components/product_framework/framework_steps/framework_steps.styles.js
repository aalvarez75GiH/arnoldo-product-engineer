import styled, { keyframes } from "styled-components";

const journeyEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FrameworkStepsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(
    ${({ $visibleSteps }) => $visibleSteps},
    minmax(0, 1fr)
  );

  gap: ${({ $visibleSteps }) => ($visibleSteps === 6 ? "24px" : "28px")};

  width: 100%;
  min-width: 0;
  margin-top: 24px;

  animation: ${journeyEnter} 320ms ease both;

  @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
    gap: ${({ $visibleSteps }) => ($visibleSteps === 6 ? "26px" : "30px")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ $visibleSteps }) => ($visibleSteps === 6 ? "18px" : "22px")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: 16px;

    width: calc(100% + 32px);
    max-width: none;

    margin-right: -16px;
    margin-left: -16px;

    padding: 4px 16px 24px;

    overflow-x: auto;
    overflow-y: hidden;

    overscroll-behavior-x: contain;
    scroll-padding-inline: 16px;
    scroll-snap-type: x mandatory;

    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 14px;

    width: calc(100% + 24px);
    margin-right: -12px;
    margin-left: -12px;

    padding-right: 12px;
    padding-left: 12px;

    scroll-padding-inline: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    gap: 12px;
  }
`;
// const journeyEnter = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(14px);
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// export const FrameworkStepsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(
//     ${({ $visibleSteps }) => $visibleSteps},
//     minmax(0, 1fr)
//   );

//   gap: ${({ $visibleSteps }) => ($visibleSteps === 6 ? "12px" : "18px")};

//   width: 100%;
//   min-width: 0;
//   margin-top: 18px;

//   animation: ${journeyEnter} 320ms ease both;

//   @media (min-width: ${({ theme }) => theme.breakpoints.wide}) {
//     gap: ${({ $visibleSteps }) => ($visibleSteps === 6 ? "14px" : "20px")};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//     gap: 18px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     display: flex;
//     gap: 16px;

//     width: calc(100% + 32px);
//     margin-right: -16px;
//     margin-left: -16px;
//     padding: 4px 16px 22px;

//     overflow-x: auto;
//     overflow-y: hidden;

//     overscroll-behavior-x: contain;
//     scroll-padding-inline: 16px;
//     scroll-snap-type: x mandatory;

//     scrollbar-width: none;
//     -webkit-overflow-scrolling: touch;

//     &::-webkit-scrollbar {
//       display: none;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     gap: 14px;

//     width: calc(100% + 24px);
//     margin-right: -12px;
//     margin-left: -12px;
//     padding-right: 12px;
//     padding-left: 12px;

//     scroll-padding-inline: 12px;
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
//     gap: 12px;
//   }
// `;
