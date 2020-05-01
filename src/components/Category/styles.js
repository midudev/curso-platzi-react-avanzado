import styled from 'styled-components'
import { loadingAnimation } from '../../styles/Animation'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 80px;
`

export const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`
export const Circle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  & svg {
    fill: none;
    stroke: #8a3ab9;
    stroke-linecap: round;
    stroke-width: 3;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: ${loadingAnimation} 5s forwards ease-in-out normal;
  }
`
