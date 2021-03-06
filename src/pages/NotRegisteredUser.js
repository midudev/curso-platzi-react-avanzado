import React, { Fragment } from 'react';
import Context from '../Context';

import { UserForm } from '../components/UserForm';
export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return <Fragment>
                    <UserForm onSubmit={activateAuth} title={'Log in'} text={"Log in to see photos and videos of pets."} />
                    <UserForm onSubmit={activateAuth} title={'Sign Up'} text={"Sign up to see photos and videos of pets."} />
                </Fragment>
            }
        }
    </Context.Consumer>
)