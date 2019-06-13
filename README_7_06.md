En esta clase vamos a hacer que nuestro usuario que está logueado, pueda guardar sus favoritos y, además, se los podamos mostrar en nuestra aplicación.

Lo único que tenemos que hacer es ir a l `TooggleLikeMutation` y cambiar la query por:
```js
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
```

Ahora, si intentamos hacer un like, veremos que nos da un error en la consola y nos dice que necesitamos tener la sesión iniciada para poder hacer esta acción. Esto es porque aunque hemos iniciado sesión, no le estamos pasando a nuestro servidor de GraphQL el token. Para hacer eso, tenemos que volver a nuestro punto de entrada de la aplicación `index.js`. Allí vamos a usar la propiedad `request` que nos permitirá añadir información a cada petición antes de que se envie:

```js en index.js
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

```js en index.js
onError: ({ networkError }) => {
  if (networkError.result.code === 'invalid_token') {
    window.localStorage.removeItem('token')
    window.location.href = '/'
  }
}
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
