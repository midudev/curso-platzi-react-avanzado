import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/Animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  height: 120px;
  margin-bottom: 25px;
  align-items: center;
  border: 1px solid #dbdbdb;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.7);
      z-index: 1;
      ${fadeIn({ time: '0.75s' })}
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
