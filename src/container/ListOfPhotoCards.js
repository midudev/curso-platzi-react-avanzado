import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { useGetPhotos } from '../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const response = useGetPhotos(categoryId)
  return <ListOfPhotoCardsComponent {...response} />
}
