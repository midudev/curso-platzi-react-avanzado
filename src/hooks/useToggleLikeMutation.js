import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useToggleLikeMutation = (id) => {
  const [toggleLikephoto] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  return { toggleLikephoto }
}
