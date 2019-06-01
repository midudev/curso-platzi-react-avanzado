import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../components/PhotoCard'

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  return <PhotoCard {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {renderProp}
  </Query>
)
