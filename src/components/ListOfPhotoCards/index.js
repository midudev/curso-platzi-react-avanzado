import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { PhotoCard } from '../PhotoCard';

import {Loader} from '../Loader';
import {ErrorMessage} from '../ErrorMessage';
import { List } from './styles';

const withPhotos = gql`
    query getPhotos {
        photos{
            id
            categoryId
            src   
            likes
            userId
            liked
        }
    }
`

export const ListOfPhotoCards = () => {
    const { loading, error, data }  = useQuery(withPhotos)
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error}/>
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