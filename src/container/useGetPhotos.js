import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


export function useGetPhotos(categoryId) {
    const getPhotos = gql`
    query getPhotos($categoryId: ID) {
            photos(categoryId: $categoryId ){
                id
                categoryId
                src   
                likes
                userId
                liked
            }
        }
    `

    const { loading, error, data } = useQuery(getPhotos, {
        variables: { categoryId }
    })
    return { loading, error, data }
}