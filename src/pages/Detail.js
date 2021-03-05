import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';
export const Detail = ({ detailId }) => {
    return (
        <PhotoCardWithQuery id={detailId} />
    )
}