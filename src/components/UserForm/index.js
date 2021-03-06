import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';

import { Form, Input, Button, Title, Text } from './styles';
export const UserForm = ({ onSubmit, title, text }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    return (
        <Fragment>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Form onSubmit={onSubmit}>
                {/* <div>
                    <label>
                        <span></span>
                        <input placeholder="Email" {...email}/>
                    </label>
                </div>
                <div>
                    <label>
                        <span></span>
                        <input placeholder="Email" {...email}/>
                    </label>
                </div> */}
                <Input placeholder="Email" {...email} />
                <Input placeholder="password" {...password} />
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )
};