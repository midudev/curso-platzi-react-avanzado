import React, { Fragment } from 'react';
import { Query } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { PhotoCard } from '../components/PhotoCard';

const query = gql`
    query getSinglePhoto($id:ID){
        photo(id:$id){
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`

export function PhotoCardWithQuery({ id }) {

    return (
        <Fragment>

            <Query query={query} variables={{ id }}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return null
                        if (error) return error.message
                        const { photo = {} } = data
                        return <PhotoCard  {...photo} />
                    }
                }
            </Query>
        </Fragment>
    )
}
