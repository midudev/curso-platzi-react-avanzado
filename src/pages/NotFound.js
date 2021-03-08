import React, { Fragment } from 'react';
import { ErrorMessage } from '../components/ErrorMessage';
import { RedirectButton } from '../components/Buttons';

export const NotFound = () => {
    return (
        <Fragment>
            <ErrorMessage message="Page Not Found" title={true} />
            <RedirectButton>Back to home</RedirectButton>
        </Fragment>

    )
}