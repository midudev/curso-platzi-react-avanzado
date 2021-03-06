import React, { Fragment } from 'react';
import Context from '../Context';
import { RegisterMutation } from '../containers/RegisterMutation';
import { UserForm } from '../components/UserForm';
export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return <Fragment>
                    <UserForm onSubmit={activateAuth} title={'Log in'} text={"Log in to see photos and videos of pets."} />
                    <RegisterMutation>
                        {
                            (register, {data, loading, error}) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password };
                                    const variables = { input };
                                    register({ variables }).then(activateAuth)
                                }
                                const errorMsg = error && 'User already exists'
                                return <UserForm onSubmit={onSubmit} title={'Sign Up'} text={"Sign up to see photos and videos of pets."} loading={loading} error={errorMsg} />
                            }
                        }
                    </RegisterMutation>
                </Fragment>
            }
        }
    </Context.Consumer>
)