import styled from 'styled-components';
import {fadeInDown, fadeOutUp} from '../../styles/animation';
export const List = styled.ul`
    display:flex;
    overflow: auto;
    width: 100%;
    padding: 10px 5px;
    &.fixed {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0,0,0,.3);
      left: 0;
      right: 0;
      margin: 0 auto; //right and left 0 with margin 0 auto allows horizontal centering
      max-width: 400px;
      padding: 5px;
      position: fixed;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
      ${fadeInDown()};
    }

  @media only screen and (max-width: 1080px){
    &::-webkit-scrollbar {
        display: none;
    }
  }
`

export const Rapper = styled.div`
    padding: 0 8px;
`

export const Item = styled.li`
    padding: 0 8px;
    list-style:none
`