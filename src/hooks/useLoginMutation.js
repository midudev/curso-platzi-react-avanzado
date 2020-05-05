import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLoginMutation = (email, password) => {
  const [login, { data, loading, error }] = useMutation(LOGIN, { variables: { input: { email, password } } })
  const dataLogin = data
  const loadingLogin = loading
  const errorLogin = error
  return {
    login,
    dataLogin,
    loadingLogin,
    errorLogin
  }
}
