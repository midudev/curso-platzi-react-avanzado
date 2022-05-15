import { gql, useQuery } from '@apollo/client'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const usePhotos = () => useQuery(withPhotos)
