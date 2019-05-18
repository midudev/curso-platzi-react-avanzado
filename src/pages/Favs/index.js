import React from 'react'

import { Layout } from '../../components/Layout'
import { ListOfFavs } from '../../components/ListOfFavs'

import { QueryFavs } from '../../requests/QueryFavs'

import { Helmet } from 'react-helmet'

export const Favs = () => (
  <Layout title='Tus favoritos'>
    <Helmet>
      <title>Tus favoritos | Petgram</title>
    </Helmet>

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
