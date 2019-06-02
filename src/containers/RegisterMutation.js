import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const mutation = gql`
mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const RegisterMutation = ({ children }) => {
  return <Mutation mutation={mutation}>{children}</Mutation>
}
