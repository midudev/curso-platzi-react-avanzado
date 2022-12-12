import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from '@apollo/client/react/components'
import { useGlobalState } from '../../hooks/useGlobalState'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export const MutationLogin = ({ children }) => {
  const { activateAuth } = useGlobalState()

  return (
    <Mutation mutation={LOGIN} onCompleted={data => activateAuth(data.login)}>
      {(login, { data = {}, loading, error }) => {
        const { login: token } = data
        const doLogin = input => {
          login({ variables: { input } })
        }
        return children({ doLogin, token, loading, error })
      }}
    </Mutation>
  )
}
