import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'

const GET_PHOTOS = gql`
  {
    photos {
      id,
      categoryId,
      src,
      userId,
      likes
    }
  }
`

export const FetchListOfPhotos = () => (
  <Query query={GET_PHOTOS}>
    {({ loading, error, data }) => {
      const { photos } = data
      return <ListOfPhotoCards photos={photos} />
    }}
  </Query>
)
