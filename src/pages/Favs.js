import React from 'react'
import { ListFavorites } from '../container/ListOfFavorites'
import { Header } from '../styles/custom/styles'

export const Favs = () => {
  return (
    <>
      <Header>Favoritos</Header>
      <ListFavorites />
    </>
  )
}
