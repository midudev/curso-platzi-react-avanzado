import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  ${fadeIn()};
  display: flex;
  overflow-x:scroll;
  width:100%;
  border-bottom: 2px solid #e6e6e6;
  padding-bottom:0.4rem;
  ${props => props.fixed && css`
    position:fixed;
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding:5px;
    position: fixed;
    top:-20px;
    transform:scale(.5);
    z-index:1;
  `}
 
`
export const Item = styled.li`

  padding: 0 8px;
  `
