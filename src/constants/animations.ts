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

const w = 96;
const h = 112;
const xspace = w / 2;
const yspace = h / 4 - 1;

export const tetromino1 = keyframes`
  0%, 40% { 
    /* compose logo *//* 1 on 3 *//* L-shape */
    transform: translate(0,0);
  } 50% {
    /* pre-box */
    transform: translate(${xspace}px,-${yspace}px);
  } 60%, 100% {
    /* box *//* compose logo */
    transform: translate(${xspace * 2}px,0);
  }
`;

export const tetromino2 = keyframes`
  0%, 20% { 
    /* compose logo *//* 1 on 3 */
    transform: translate(${xspace * 2}px, 0px);
  } 40%, 100% { 
    /* L-shape *//* box *//* compose logo */
    transform: translate(${xspace * 3}px, ${yspace}px);
  }
`;

export const tetromino3 = keyframes`
  0% { 
    /* compose logo */
    transform: translate(${xspace * 3}px, ${yspace}px);
  } 20%, 60% { 
    /* 1 on 3 *//* L-shape *//* box */
    transform: translate(${xspace * 2}px, ${yspace * 2}px);
  } 90%, 100% { 
    /* compose logo */
    transform: translate(${xspace}px, ${yspace}px);
  }
`;

export const tetromino4 = keyframes`
  0%, 60% {
    /* compose logo *//* 1 on 3 *//* L-shape *//* box */
    transform: translate(${xspace}px, ${yspace}px);
  } 90%, 100% { 
    /* compose logo */
    transform: translate(0, 0);
  }
`;

export const wiggling = keyframes`
  0% {
    transform: rotate(-7deg);
  }
  50% {
    transform: rotate(7deg);
  }
  100% {
    transform: rotate(-7deg);
  }
`;

export const bounce = keyframes`
  0% {
    transform: scale(1, 0.6) translateY(70px) translateX(280px);
  }
  10% {
    transform: scale(1, 0.95) translateY(70px) translateX(280px);
  }
  30% { 
    transform: scale(1, 1.15) translateY(70px) translateX(280px);
  }
  50% { 
    transform: scale(1, 0.95) translateY(70px) translateX(280px);
  }
  60% { 
    transform: scale(1, 1.01) translateY(70px) translateX(280px);
  }
  70% { 
    transform: scale(1, 0.99) translateY(70px) translateX(280px);
  }
  100% { 
    transform: scale(1, 1) translateY(70px) translateX(280px);
  }
`;
