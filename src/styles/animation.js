import { css, keyframes } from 'styled-components'

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
