import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';
import { UserForm } from '../components/UserForm';
import { Layout } from '../components/Layout';
export default () => {
    const { activateAuth } = useContext(Context)
    const [isRegistered, setIsRegistered] = useState(true);
    return <Layout title="Session">
        {
            isRegistered
                ? <LoginMutation>
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
                            return <UserForm onSubmit={onSubmit} title={'Log in'} text={"Log in to see photos and videos of pets."} loading={loading} error={errorMsg} isRegistered={isRegistered} onClick={() => setIsRegistered(!isRegistered)} />
                        }
                    }
                </LoginMutation>
                : <RegisterMutation>
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
                            return <UserForm onSubmit={onSubmit} title={'Sign up'} text={"Sign up to see photos and videos of pets."} loading={loading} error={errorMsg} isRegistered={isRegistered} onClick={() => setIsRegistered(!isRegistered)} />
                        }
                    }
                </RegisterMutation>
        }


    </Layout>
}

