import { css, keyframes } from 'styled-components'

// Animations for components

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0
  }
  to {
    filter: blur(0);
    opacity: 1
  }
`
export const loadingAnimation = keyframes`
  to{
    stroke: #e7008a;
    stroke-dasharray: 1;
  }
  from{
    stroke:#4658ac;
    transform:rotate(230deg);
    stroke-dasharray: 8;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `

// Animation for pages

const LdsGrids = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`
export const loadingPage = ({ time = '1.2s', type = 'linear', iteration = 'infinite' } = {}) =>
  css`
    animation: ${time} ${LdsGrids} ${type} ${iteration};
  `
export const delay = ({ timeDelay } = {}) =>
  css`
    animation-delay: ${timeDelay};
  `
