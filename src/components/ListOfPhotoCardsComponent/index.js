import React from 'react';
import { PhotoCard } from '../PhotoCard';

import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { List } from './styles';

export const ListOfPhotoCardsComponent = ({ loading, error, data: { photos = [] } }) => {
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    return (
        <List>
            {
                photos.map((photocard, id) => (
                    <PhotoCard key={id} {...photocard} />
                ))
            }
        </List>
    )
}