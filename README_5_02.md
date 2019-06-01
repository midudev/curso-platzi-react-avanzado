Ya podemos ver todas las fotos desde el servidor. Esto está muy bien pero tenemos que preparar nuestro componente de forma que podamos filtrar por las diferentes categorías que tenemos. Para ello, tenemos que preparar nuestra consulta de forma que podrá aceptar un parámetro de categoria.

```js
const withPhotos = graphql(gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    ...
```

Ahora, para utilizar este parámetro tenemos que pasarselo como prop a nuestro componente.

```js en App.js
<div>
  <Logo />
  <GlobalStyles />
  <ListOfCategories />
  <ListOfPhotoCards categoryId={2} />
</div>
```

Por fin tenemos listo nuestro componente, pero antes de terminar la clase, vamos a extraer todo el componente de orden superior fuera del componente presentacional.

Para eso, creamos el fichero `hocs/withPhotos.js`, allí extraeremos el High Order Component por si queremos utilizarlo más adelante con otro componente visual totalmente distinto.

```js
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export const withPhotos = graphql(gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)
```

Y también creamos el archivo `containers/ListOfPhotoCards.js`. En este archivo vamos simplemente a importar el componente visual, importar el HoC y devolver el componente envuelto con esta funcionalidad, para utilizar más adelante.

```js en containers/ListOfPhotoCards.js
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { withPhotos } from '../hocs/withPhotos'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
```

Ahora en nuestro archivo `App.js` importamos el contenedor en lugar del componente y ya lo tendremos de nuevo funcionando, pero separando claramente cada fichero de forma que los podamos reutilizar en nuestros desarrollos.

```js en App.js
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
```