import React, { Fragment, useContext } from 'react';
import {Context} from '../Context';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';
import { UserForm } from '../components/UserForm';
export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context)
    return <Fragment>
        <LoginMutation>
            {
                (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        login({ variables }).then(({ data }) => {
                            const { login } = data;
                            activateAuth(login)
                        })
                    }
                    const errorMsg = error && 'Incorrect password, or the user is not registered'
                    return <UserForm onSubmit={onSubmit} title={'Log in'} text={"Log in to see photos and videos of pets."} loading={loading} error={errorMsg} />
                }
            }
        </LoginMutation>
        <RegisterMutation>
            {
                (register, { loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        register({ variables }).then(({ data }) => {
                            const { signup } = data;
                            activateAuth(signup)
                        })
                    }
                    const errorMsg = error && 'User already exists'
                    return <UserForm onSubmit={onSubmit} title={'Sign Up'} text={"Sign up to see photos and videos of pets."} loading={loading} error={errorMsg} />
                }
            }
        </RegisterMutation>
    </Fragment>
}

