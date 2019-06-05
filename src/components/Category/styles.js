import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animations'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;

  &[aria-current] {
    transform: scale(0.8);
    img {
      box-shadow: 0 10px 14px rgba(239, 0, 239, 0.5);
    }
  }
`

export const Image = styled.img`
  ${fadeIn({ time: '0.5s' })};
  border: 1px solid #ddd;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
