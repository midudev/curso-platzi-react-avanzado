import styled from 'styled-components';
export const Button = styled.button`
    display:block;
    padding: 8px;
    border-radius: 3px;
    margin-top: 15px;
    background: #ff0080;
    color: #fff;
    text-align: center;
    font-weight: 700;
    width: 100%;
    &[disabled]{
        opacity: 0.3;
    }
`