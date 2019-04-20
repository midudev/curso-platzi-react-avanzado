import styled, { keyframes } from 'styled-components'

const commonStyles = `
  display: block;
  height: 70px;
  width: 70px;
`

const fadeIn = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const Anchor = styled.a`
  display: block;
  padding-top: 5px;
  text-decoration: none;
`

export const Span = styled.span`
  display: block;
  padding-bottom: 8px;
  text-align: center;
`

export const Placeholder = styled.div`
  ${commonStyles}
`

export const Img = styled.img`
  ${commonStyles}
  animation: 1s ${fadeIn} ease;
  border-radius: 50%;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  object-fit: cover;
`
