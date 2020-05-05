import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const useToggleLikeMutation = (id) => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  return { toggleLikePhoto }
}
