import React from 'react'
import { FavsWithQuery } from '../../containers/FavsWithQuery'
import { Layout } from '../../components/Layout'

export const Favs = ({ favs = [] }) => {
  return <Layout title='Tus favoritos' subtitle='Aquí tienes las fotos que te han gustado'>
    <FavsWithQuery />
  </Layout>
}

export default Favs
