import React from 'react';
import { Wrapper, Title, Message } from './styles';
export const ErrorMessage = (props) => (
        <Wrapper>
            <Title>Oh No!</Title>
            <Message>{props.message}</Message>
        </Wrapper>
)