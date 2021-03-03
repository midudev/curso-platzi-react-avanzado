import styled from 'styled-components';
import {fadeIn} from '../../styles/animation';
export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position:relative;
    width: 100%;
`

export const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    padding: 2px 0 20px 15px;
    display: flex;
    align-items: center;
    & div {
        border-radius: 50%;
        border: 2px solid #ffbd00;
        padding: 5px;
        display: flex;
        justify-content: center;
        margin-right: 8px;
        margin-top: -30px;
        position: relative;
        background: #fff;
    }
`