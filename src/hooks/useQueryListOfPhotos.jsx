import { useQuery, gql } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos (categoryId: $categoryId) {
      id,
      categoryId,
      src,
      userId,
      likes,
      liked
    }
  }
`

export const useQueryListOfPhotos = ({ children, categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
    fetchPolicy: 'network-only'
  })

  return { loading, error, photos: data?.photos }
}
