import React from 'react'

import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'

export const ListFavorites = () => {
  const { data, loading, error } = useGetFavorites()
  return <ListOfFavs {...data} loading={loading} error={error} />
}
