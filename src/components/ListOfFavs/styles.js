import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/Animation'

export const Link = styled(LinkRouter)`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    padding-bottom: 100%;
    display: block;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`
export const Paragraph = styled.p`
  padding-left: 32px;
`

export const Image = styled.img`
  ${fadeIn()}
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
