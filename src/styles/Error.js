import styled from 'styled-components'
import { fadeIn } from './Animation'

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  background-color: #f0134d;
  box-shadow: 5px 5px 6px 0px rgba(0, 0, 0, 0.4);
  width: 90%;
  height: 70px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  ${fadeIn({ time: '0.75s' })}
  & p {
    color: #fff;
    text-align: center;
  }
`
