import React, { Fragment } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
