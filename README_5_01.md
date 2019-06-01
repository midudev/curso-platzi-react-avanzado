Primero, instalamos las dependencias necesarias para react-apollo.

`apollo-boost`, es una utilidad que nos permite inicializar nuestra conexión con un servidor de Apollo muy rápidamente y sin configuración.

`react-apollo`, es la integración de react con el cliente de apollo.

`graphql` es la implementación del lenguaje de consultas para Javascript.

```
npm install apollo-boost react-apollo graphql --save
```

Con estas tres dependencias, ya podemos ir al punto de entrada de nuestra aplicación para preparar la conexión con nuestro servidor de Apollo.

Importamos las dependencias necesarias:

```js
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
```

E inicializamos la conexión con la url donde tengamos nuestro servidor deployado. En mi caso es esta dirección:

```js
const client = new ApolloClient({
  uri: 'https://petgram-api.midudev.now.sh/graphql'
})
```

Ahora, esta conexión la usamos en el componente Provider, que nos permitirá utilizar el cliente de Apollo en todo nuestro árbol de elementos.

```js
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
```

La forma más sencilla de empezar a utilizar nuestra conexión es con el uso de un HighOrderComponent. Para ello, vamos a ir al componente `ListOfPhotoCards`.

Primero importamos las dependencias necesarias:
```js
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
```

Cambiamos el nombre del componente a `const ListOfPhotoCardsComponent` para exportar el que tendremos envuelto con la llamada

```js
const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
```

Lo que estamos haciendo es envolver nuestro componente con una query a nuestro servidor con GraphQL y recogiendo los datos que queremos. En este caso vamos a enseñar todas las fotografías.

Si volvemos a la web, podemos ver que la petición se está haciendo pero necesitamos recoger esta información en nuestro componente. La información nos la está inyectando por props en nuestro componente que envolvemos. Vamos a revisarlo.

```
const ListOfPhotoCardsComponent = (props) => {
  debugger
```

Vemos que recibimos una propiedad `data` y dentro tenemos `photos` la segunda vez, con la lista de fotos.

Podríamos controlar cuando nuestro componente está cargando pero lo que vamos a hacer es añadir un valor inicial en el caso de que las fotos no estén, para no mostrar nada.

```js
const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
```

Con esto ya podemos usar estas fotos para mostrarlas.

```js
<PhotoCard
  id={photo.id}
  categoryId={photo.categoryId}
  likes={photo.likes}
  liked={photo.liked}
  src={photo.src}
  userId={photo.userId} />
```

Y con esto funciona, habréis notado que los nombres de las props de nuestro componente encajan perfectamente con las propiedades del objeto foto. Podemos utilizar el rest operator de forma enviemos todas las props directamente sin necesidad de volver a escribirlas todas.

```js
<PhotoCard {...photo} />
```

Ahora también vemos que tenemos un warning en la pantalla y es que la key no es correcta.
```js
<Item key={photo.id}>
```

Y con esto, ya tendríamos la lista de fotos en nuestra aplicación, haciendo una petición con GraphQL e integrándola en nuestra aplicación de React.
