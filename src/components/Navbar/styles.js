import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';
export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    max-width: 500px;
    width: 100%;
    z-index: 1000;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;    

    &[aria-current]{ //The parent selector will have an aria-current attribute
        color: #000;
        &:after{ //A pseudo element that is right after the element
            ${fadeIn({ time: '0.5s' })};
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 34px;
            line-height: 20px;

        }
    }

`