import React from 'react'
import { ListFavorites } from '../container/ListOfFavorites'
import { HelmetLayout } from '../components/Helmet'

export const Favs = () => {
  return (
    <>
      <HelmetLayout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos' />
      <ListFavorites />
    </>
  )
}
