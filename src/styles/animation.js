import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`
const fadeInDownKeyframes = keyframes`
    0% {
        /* transform: translate3d(0, -50%, 0); */
        top: -25%;
        opacity: 0;
    }
    100% {
        /* transform: translate3d(0); */
        top: -20px;
        opacity: 1;
    }
`
const fadeOutUpKeyframes = keyframes`
    0% {
        transform: translate3d(0);
        opacity: 1;
    }
    100% {
        transform: translate3d(0, -50%, 0);
        opacity: 0;
    }
`

export const fadeOutUp = ({ time = '0.6s', type = 'both' } = {}) => (
    css`animation:  ${time} ${fadeOutUpKeyframes}  ${type};`
)
export const fadeInDown = ({ time = '0.6s', type = 'both' } = {}) => (
    css`animation:  ${time} ${fadeInDownKeyframes} cubic-bezier(.18,.89,.32,1.28) ${type};`
)

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
    css`animation: ${time} ${fadeInKeyframes} ${type};`
)