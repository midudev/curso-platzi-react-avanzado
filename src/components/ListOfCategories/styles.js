import styled from 'styled-components';

export const List = styled.ul`
    display:flex;
    overflow: auto;
    width: 100%;
    padding: 10px 5px;

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