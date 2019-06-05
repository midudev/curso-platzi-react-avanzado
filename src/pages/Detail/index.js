import React from 'react'
import { Layout } from '../../components/Layout'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'

export const Detail = ({ id }) => {
  return <Layout title={`Fotografía ${id}`}>
    <PhotoCardWithQuery id={id} />
  </Layout>
}
