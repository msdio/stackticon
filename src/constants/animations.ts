import { keyframes } from '@emotion/react';

export const fadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const fadeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
