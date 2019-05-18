import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const MutationLike = ({ children }) => {
  return (
    <Mutation mutation={LIKE}>
      {(toggleLike) => {
        const doToggleLike = input => {
          toggleLike({ variables: { input } })
        }
        return children({ doToggleLike })
      }}
    </Mutation>
  )
}
