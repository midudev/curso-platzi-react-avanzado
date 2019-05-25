import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const List = styled.ul`
  animation: all .3s ease;
  display: flex;
  overflow: scroll;
  width: 100%;

  &.fixed {
    ${fadeIn({ time: '1.5s' })};
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    margin-top: -20px;
    padding: 5px;
    position: fixed;
    top: 0;
    transform: scale(.5);
    z-index: 1;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
