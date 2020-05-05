import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const useRegisterMutation = (email, password) => {
  const [register, { data, loading, error }] = useMutation(REGISTER, { variables: { input: { email, password } } })
  return { register, data, loading, error }
}
