En esta clase vamos a hacer que nuestro usuario que está logueado, pueda guardar sus favoritos y, además, se los podamos mostrar en nuestra aplicación.

Lo único que tenemos que hacer es ir a l `TooggleLikeMutation` y cambiar la query por:
```js
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
```

Ahora, si intentamos hacer un like, veremos que nos da un error en la consola y nos dice que necesitamos tener la sesión iniciada para poder hacer esta acción. Esto es porque aunque hemos iniciado sesión, no le estamos pasando a nuestro servidor de GraphQL el token. Para hacer eso, tenemos que volver a nuestro punto de entrada de la aplicación `index.js`. Allí vamos a usar la propiedad `request` que nos permitirá añadir información a cada petición antes de que se envie:

```js
request: operation => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })
},
```

Ahora probamos el botón de Me gusta y vemos que tiene un comportamiento bastante extraño. Esto es porque en la PhotoCard todavía estábamos usando el localStorage para mostrar visualmente si el usuario había guardado el favorito. Vamos a arreglarlo.

- Eliminamos todo lo referente a localStorage.
- Eliminamos el estado local respecto a los likes.
- Usamos la prop `liked` que le llega. ¿De dónde le llega? Lo explicamos.

Ahora que ya tenemos esto, vamos a hacer que el usuario pueda ver sus favoritos. Vamos a crear rápidamente el contenedor que hará la query para los favoritos y lo que renderizará.

```js
import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const query = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  const { favs } = data

  return favs.map(fav => <img key={fav.id} src={fav.src} />)
}

export const FavsWithQuery = () => (
  <Query query={query}>
    {renderProp}
  </Query>
)
```

Esto lo usamos en la página `Favs`:

```js
import React, { Fragment } from 'react'
import { FavsWithQuery } from '../../containers/FavsWithQuery'

export const Favs = ({ favs = [] }) => {
  return <Fragment>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
}
```

Ahora, vamos a crear el componente `ListOfFavs`, en lugar de hacer que lo que renderiza lo hagamos directamente en el contenedor.

```js
import React from 'react'

export const ListOfFavs = ({ favs }) => {
  return favs.map(fav => <img key={fav.id} src={fav.src} />)
}
```

Vamos a estilarlo:

```js
import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`
```

 Y ahora usamos estos estilos:

```js
import React from 'react'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs }) => {
  return <Grid>
    {favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
      <Image key={fav.id} src={fav.src} />
    </Link>)}
  </Grid>
}
```

Como vemos, ahora se ve bien pero hay un pequeño problema. Y es que cuando cambiamos si una foto nos gusta, no vemos reflejado este cambio en la UI, esto es porque GraphQL usa una caché muy potente para ahorrarse el número de peticiones que debe hacer.

Existen diferentes estrategias por lo que podríamos arreglar esto y os animo a que aprendáis más y mejores técnicas sobre GraphQL en los cursos de Platzi, pero en nuestro curso, para seguir con React, vamos simplemente a indicar que queremos usar la política de network-first.

```js
export const FavsWithQuery = () => (
  <Query query={query} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
```

Con esto, ya tenemos nuestra página de favoritos funcionando.
