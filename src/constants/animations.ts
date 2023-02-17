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
