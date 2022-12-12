import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from '@apollo/client/react/components'

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
