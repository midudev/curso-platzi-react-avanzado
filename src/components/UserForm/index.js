import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Fox } from '../Fox/index';
import { Wrapper, Form, Input, Title, Text, Paragraph } from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
import { SubmitButton } from '../Buttons';
export const UserForm = ({ onSubmit, title, text, loading, error, isRegistered, onClick }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value })
    }
    return (
        <Wrapper>
            <Fox />
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Form onSubmit={handleSubmit} disabled={loading}>
                {loading && <Loader />}
                <Input placeholder="Email" {...email} disabled={loading} />
                <Input type="password" placeholder="password" {...password} disabled={loading} />
                <SubmitButton disabled={loading}>{title}</SubmitButton>
                {error && <ErrorMessage message={error} title={false} />}
            </Form>
            {
                isRegistered
                    ? <Paragraph>Don't have an account? <button onClick={onClick} disabled={loading}>Sign up</button></Paragraph>
                    : <Paragraph>Have an account? <button onClick={onClick} disabled={loading}>Log in</button></Paragraph>
            }
        </Wrapper>
    )
};