import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ListOfCategories from '../../components/ListOfCategories'

const GET_CATEGORIES = gql`
  {
    categories {
      id,
      name,
      emoji,
      cover,
      path
    }
  }
`

export const FetchListOfCategories = () => (
  <Query query={GET_CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      const { categories } = data
      return <ListOfCategories categories={categories} />
    }}
  </Query>
)
