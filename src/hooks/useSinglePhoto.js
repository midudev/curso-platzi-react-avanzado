import { gql, useQuery } from '@apollo/client'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const useSinglePhoto = (id) => {
  return useQuery(query, {
    variables: {
      id
    }
  })
}
