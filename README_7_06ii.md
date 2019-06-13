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
