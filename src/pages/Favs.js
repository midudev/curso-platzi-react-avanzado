import React from 'react'
import { ListFavorites } from '../container/ListOfFavorites'
import { HelmetLayout } from '../components/Helmet'

export default () => {
  return (
    <>
      <HelmetLayout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos' />
      <ListFavorites />
    </>
  )
}
