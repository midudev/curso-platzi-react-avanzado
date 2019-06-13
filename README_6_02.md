En esta clase vamos a arreglar también nuestra página de Detalle. Lo primero que vamos a hacer es usar el Router también para nuestra página de detalle.

Para seguir la misma estructura que en las rutas de la App sólo aparecen componentes de tipo página, vamos a crear el archivo `/pages/Detail/index.js` y allí.

```js
import React from 'react'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'

export const Detail = ({ id }) => {
  return <PhotoCardWithQuery id={id} />
}
```

```js
<Router>
  <Home path='/' />
  <Home path='/pet/:id' />
  <Detail path='/detail/:id' />
</Router>
```

En el componente `PhotoCard` vamos a arreglar el enlace de forma que no provoque una navegación y, además, vaya a la ruta que esperamos.

```js
<Link to={`/detail/${id}`}>
  <ImgWrapper>
    <Img src={src} />
  </ImgWrapper>
</Link>
```
