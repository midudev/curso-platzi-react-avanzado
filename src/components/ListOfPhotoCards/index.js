import React from 'react';
import { useGetPhotos } from '../../container/useGetPhotos';
import { PhotoCard } from '../PhotoCard';

import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { List } from './styles';

export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useGetPhotos(categoryId)
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    return (
        <List>
            {
                data.photos.map((photocard, id) => (
                    <PhotoCard key={id} {...photocard} />
                ))
            }
        </List>
    )
}