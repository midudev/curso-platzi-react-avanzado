import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_FAVS = gql`
  query getfavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const QueryFavs = ({ children }) => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {({ data, loading, error }) => {
      return children({ favs: data.favs, loading, error })
    }}
  </Query>
)
