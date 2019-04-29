import React from 'react'

import { Layout } from '../../components/Layout'
import { QueryPhoto } from '../../requests/QueryPhoto'
import { PhotoCard } from '../../components/PhotoCard'

export const Detail = ({ id }) => (
  <Layout>
    <QueryPhoto id={id}>
      {({ loading, error, photo }) => {
        if (loading || error) return null
        return <PhotoCard {...photo} />
      }}
    </QueryPhoto>
  </Layout>
)
