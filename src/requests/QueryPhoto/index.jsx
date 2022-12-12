import React from 'react'
import gql from 'graphql-tag'
import { Query } from '@apollo/client/react/components'

const GET_DETAIL = gql`
  query getDetail($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const QueryPhoto = ({ children, id }) => (
  <Query
    query={GET_DETAIL}
    variables={{ id }}
    fetchPolicy='network-only'>
    {
      ({ data, loading, error }) =>
        children({ photo: data.photo, loading, error })
    }
  </Query>
)
