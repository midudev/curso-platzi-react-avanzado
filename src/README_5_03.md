Otra forma de utilizar react-apollo es usando el patrón de las render props. Las render props es un patrón que antes de que llegasen los hooks tomaron mucha relevancia ene los desarrollos con React y consiste en que la prop children de nuestro componente, en lugar de ser elementos, es una función que recibirá por parámetros diferente información.

Para verlo más claro, vamos a crear uno para recupera la información de una foto en concreto. Primero, vamos a cambiar el enlace de las cards para que podamos

```js en PhotoCard.js
    <Article ref={ref}>
      {show &&
        <Fragment>
          <a href={`/?detail=${id}`}>
```

Ahora, en nuestro archivo `App.js` vamos a detectar cuando tengamos la id de un detalle en la URL, de forma que podamos hacer un renderizado condicional.

```js en App.js
const urlParams = new window.URLSearchParams(window.location.search)
const detailId = urlParams.get('detail')
// ... en el render ...
<div>
  <Logo />
  <GlobalStyles />
  {
    detailId
      ? <h1>Detail</h1>
      : <Fragment>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={3} />
      </Fragment>
  }
</div>
```

Ahora, creamos un archivo `containers/PhotoCardWithQuery` por ahora con el siguiente contenido:

```js
import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

export const PhotoCardWithQuery = () => (
  <PhotoCard />
)
```

Ahora en la `App` podemos dejar de pintar el título de detalle y usar este componente, y seguimos trabajando en él.

Primero, importamos las dependencias necesarias:

```js
import { Query } from "react-apollo"
import { gql } from "apollo-boost"
```

Luego, escribimos la consulta que queremos realizar a nuestro servidor de GraphQL para recibir la información de la foto.

```js
const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`
```

Y ahora, creamos en el componente usamos el componente `<Query>` de ReactApollo. Además de pasarle la query, añadimos un children. Como hemos dicho, para este componente tenemos que utilizar renderProps, así que el chidren será una función que devolverá lo que queremos renderizar.

```js
export const PhotoCardWithQuery = () => (
  <Query query={query}>
  {
    () => <PhotoCard />
  }
  </Query>
)
```

Ahora podemos ver en nuestra página que la petición se está haciendo, aunque nos da un error ya que no le estamos pasando la variable $id necesaria para hacer la petición correctamente.

Para solucionarlo, tenemos que pasar a nuestra query variables. Esto lo conseguimos usando la prop `variables` del componente `Query`, donde le pasamos un objeto y, en este objeto, todas las variables que queremos pasarle a la consulta. La id la conseguimos de las props.

```js
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      () => <PhotoCard />
    }
  </Query>
)
```

Como véis, ahora el aviso se ha ido, pero necesitamos todavía renderizar la información, para eso, vamos a modficiar el children del componente. La render prop trae diferente información útil.

```js
<Query query={query} variables={{ id }}>
  {
    ({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error! ⛔</p>
      console.log(data)
      return <PhotoCard />
    }
  }
</Query>
```

Hemos podido ver el mensaje de `Loading` en la pantalla y, tras eso, nos ha enseñado el mismo componente. Pero ya tenemos la información en la consola. Como vemos, la información está lista para ser pasada al componente, así que lo hacemos con el rest operator.

```js
  return <PhotoCard {...data.photo} />
```

Antes de terminar esta clase, vamos a hacer una pequeña limpieza de nuestro código de forma que vamos a separar la función de renderProps para que se pueda leer de forma más clara y sea más mantenible.

```js
const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  return <PhotoCard {...data.photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {renderProp}
  </Query>
)
```