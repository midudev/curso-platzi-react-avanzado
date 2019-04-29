import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../animations'

const commonStyles = `
  display: block;
  height: 70px;
  width: 70px;
`

export const Link = styled(LinkRouter)`
  display: block;
  padding-top: 5px;
  text-decoration: none;
  &[aria-current] {
    box-shadow: 0px 0px 24px #ff00ff69 inset;
    border-radius: 50px;
  }
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
  ${fadeIn()}
  border-radius: 50%;
  box-shadow: 0px 10px 14px rgba(0,0,0,.2);
  object-fit: cover;
`
