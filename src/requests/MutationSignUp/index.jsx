import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from '@apollo/client/react/components'
import { useGlobalState } from '../../hooks/useGlobalState'

const SIGNUP = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`

export const MutationSignUp = ({ children }) => {
  const { activateAuth } = useGlobalState()

  return (
    <Mutation mutation={SIGNUP} onCompleted={data => activateAuth(data.singup)}>
      {(signup, { data = {}, loading, error }) => {
        const { signup: token } = data
        const doSignUp = input => {
          signup({ variables: { input } })
        }
        return children({ doSignUp, token, loading, error })
      }}
    </Mutation>
  )
}
