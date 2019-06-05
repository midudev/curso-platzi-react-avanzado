import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const mutation = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={mutation}>{children}</Mutation>
}
