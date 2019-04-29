import React from 'react'

import { Layout } from '../../components/Layout'
import { ListOfFavs } from '../../components/ListOfFavs'

import { QueryFavs } from '../../requests/QueryFavs'

export const Favs = () => (
  <Layout title='Tus favoritos'>
    <QueryFavs>
      {
        ({ loading, error, favs }) => {
          if (loading || error) return null
          return <ListOfFavs favs={favs} />
        }
      }
    </QueryFavs>
  </Layout>
)
