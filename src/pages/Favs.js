import React, { Fragment } from 'react';
import { FavsWithQuery } from '../containers/GetFavs'
export const Favs = ({ favs = [] }) => (
    <Fragment>
        <h1>Favs</h1>
        <FavsWithQuery />
    </Fragment>
)