import React from 'react'

import { Layout } from '../../components/Layout'
import { QueryPhoto } from '../../requests/QueryPhoto'
import { PhotoCard } from '../../components/PhotoCard'

import { Helmet } from 'react-helmet'

export const Detail = ({ id }) => (
  <Layout>
    <Helmet>
      <title>Fotografía número {id} | Petgram</title>
    </Helmet>

    <QueryPhoto id={id}>
      {({ loading, error, photo }) => {
        if (loading || error) return null
        return <PhotoCard {...photo} />
      }}
    </QueryPhoto>
  </Layout>
)
