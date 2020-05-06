import styled from 'styled-components'
import { loadingPage, delay } from '../../styles/Animation'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 500px;
`

export const LdsGrid = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000;
    ${loadingPage()}
  }
  & div:nth-child(1) {
    top: 6px;
    left: 6px;
    ${delay(0)}
  }
  & div:nth-child(2) {
    top: 6px;
    left: 26px;
    ${delay(-0.4)};
  }
  & div:nth-child(3) {
    top: 6px;
    left: 45px;
    ${delay(-0.8)}
  }
  & div:nth-child(4) {
    top: 26px;
    left: 6px;
    ${delay(-0.4)}
  }
  & div:nth-child(5) {
    top: 26px;
    left: 26px;
    ${delay(-0.8)}
  }

  & div:nth-child(6) {
    top: 26px;
    left: 45px;
    ${delay(-1.2)}
  }

  & div:nth-child(7) {
    top: 45px;
    left: 6px;
    ${delay(-0.8)}
  }

  & div:nth-child(8) {
    top: 45px;
    left: 26px;
    ${delay(-1.2)}
  }

  & div:nth-child(9) {
    top: 45px;
    left: 45px;
    ${delay(-1.6)}
  }
`
