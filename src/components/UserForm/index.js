import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import {Fox} from '../Fox/index';
import { Form, Input, Button, Title, Text } from './styles';
export const UserForm = ({ onSubmit, title, text }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    return (
        <Fragment>
            <Fox/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Form onSubmit={onSubmit}>
                <Input placeholder="Email" {...email} />
                <Input type="password" placeholder="password" {...password} />
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )
};