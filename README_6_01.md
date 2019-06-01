Vamos a crear la ruta para la Home y vamos a hacer que sea posible ver las diferentes categorías. Para ello creamos el archivo `/pages/Home.js` y allí vamos a tener el siguiente contenido:

```js
import React, { Fragment } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'

export const Home = () => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={3} />
    </Fragment>
  )
}
```

De esta forma en el `App.js` podemos renderizar la página <Home /> directamente, si no tenemos que enseñar un detalle.

```js
{
  detailId
    ? <PhotoCardWithQuery id={detailId} />
    : <Home />
}
```

Los que nos gustaría en este punto es que pudieramos navegar entre las diferentes categorías que hay disponibles que, como veis, ahora mismo nos da un 404.

Vamos a instalar la dependencia de Reach Router:
```
npm install @reach/router
```

Ahora ya podemos importar la dependencia:
```js
import { Router } from '@reach/router'
```

Lo que hacemos es que si no tenemos una id de detalle, vamos a usar un componente Router. Este componente es el que se encargará de renderizar diferentes componentes dependiendo de la ruta que le indiquemos.

Como queremos renderizar el mismo componente, pero poder capturar lo que viene en la ruta, vamos a hacer que en el path `/` sea la home y en `/pet/:id` también la home. Pero esto nos hará que el parámetro `:id`, lo podamos capturar y usar más adelante.

```js
{
  detailId
    ? <PhotoCardWithQuery id={detailId} />
    : <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
    </Router>
}
```

Ahora que tenemos esto, tenemos que modificar el enlace de las categorías, para que encaje con el format que nuestro router espera recibir. 

```js en ListOfCategories.js
<Item key={category.id}>
  <Category {...category} path={`/pet/${category.id}`} />
</Item>
```

Volvemos a la web y probamos a hacer click en alguna categoría. Vemos que nos devuelve un 404 y que no encuentra nada. Esto es porque está intentando acceder a esa ruta, pero no existe. Como estamos en realidad haciendo renderizado al lado del cliente, el único archivo que realmente tenemos es el index.html y ese es el que se encarga de cargar los scripts que se encarga de usar HTML5 para manejar las rutas.

Tenemos que añadir soporte para el history api fallback, de esta forma, si una ruta da un 404, lo que hará webpack por defecto es servir el archivo `index.html`.

```
webpack-dev-server --history-api-fallback
```

Ahora vemos algo de la App pero nos sigue dando un error la página. Para solucionar el problema que no encuentra nuestro archivo `bundle.js` debemos indicarle a webpack en su configuración que, cuando crea el index.html, la ruta en la que debe buscar los archivos siempre es la raíz:

```js
output: {
  filename: 'app.bundle.js',
  publicPath: '/'
},
```

Vemos que sí funciona pero no estamos cambiando el contenido dependiendo de la ruta. Para hace eso, tenemos que volver a nuestra página Home y leer las props. Allí tenemos reach/router está dejándonos los parámetros de la URL que hemos querido capturar.

```
export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}
```

Ahora funciona correctamente, pero como puedes comprobar cada vez que nos dirijimos a una nueva categoría la página recarga completamente y nos gustaría que hubiese una sensación más nativa. Para conseguirlo, tenemos que usar el componente Link de @reach/router.

Para ello, vamos a `styles.js` del componente Category, y lo que hacemos.

Cualquier componente que acepte la prop className y lo use para añadir clases al elemento del DOM lo podremos estilar directamente con styled-components.

```js Categories/styles.js
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
```

Cambiamos en el componente `Category` el uso de href a to:
```js en Category.js
<Link to={path}>
```

Y al probarlo, vemos que podemos navegar sin necesidad de refrescar la página completamente.

Ya que estamos, vamos a aprovechar que al darle al Logo, podamos volver a la portada de nuestra aplicación, para eso lo único que hacemos es envolver el logo con un Link a la portada.

```js
export const Logo = () => (
  <Link to='/'>
```