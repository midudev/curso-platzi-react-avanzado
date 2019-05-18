import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos (categoryId: $categoryId) {
      id,
      categoryId,
      src,
      userId,
      likes,
      liked
    }
  }
`

export const QueryListOfPhotos = ({ children, categoryId }) => {
  return (
    <Query
      query={GET_PHOTOS}
      variables={{ categoryId }}
      fetchPolicy='network-only'>
      {
        ({ loading, error, data }) =>
          children({ loading, error, photos: data.photos })
      }
    </Query>
  )
}
