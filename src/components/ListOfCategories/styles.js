import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

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
export const Error = styled.div`
  display: flex;
  background-color: #f0134d;
  box-shadow: 5px 5px 6px 0px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 50px;
  border-radius: 5px;
  ${fadeIn({ time: '0.75s' })}
  & p {
    color: #fff;
    text-align: center;
  }
`
