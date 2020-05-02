import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/Animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  height: 120px;
  margin-bottom: 25px;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      max-width: 400px;
      padding: 5px;
      margin: 0 auto;
      border-radius: 60px;
      position: fixed;
      top: -20px;
      right: 0;
      left: 0;
      transform: scale(0.7);
      z-index: 1;
      ${fadeIn({ time: '0.75s' })}
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
