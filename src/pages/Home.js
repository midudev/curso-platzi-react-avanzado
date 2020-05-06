import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascostas | Petsgram</title>
        <meta
          name='description'
          content='¿Quién dijo que los animales no tienen estilo? Con Petsgram puedes encontrar el mejor estilo de los animales'
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
