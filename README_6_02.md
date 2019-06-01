En esta clase vamos a arreglar también nuestra página de Detalle. Lo primero que vamos a hacer es usar el Router también para nuestra página de detalle.

```js
<Router>
  <Home path='/' />
  <Home path='/pet/:id' />
  <PhotoCardWithQuery path='/detail/:id' />
</Router>
```

Como `PhotoCardWithQuery` espera la id, ya le llegará automáticamente como prop, ya que estamos capturando el parámetro id en el path.

En el componente `PhotoCard` vamos a arreglar el enlace de forma que no provoque una navegación y, además, vaya a la ruta que esperamos.

```js
<Link to={`/detail/${id}`}>
  <ImgWrapper>
    <Img src={src} />
  </ImgWrapper>
</Link>
```

Con esto ya nos funciona y vemos que, además podemos volver atrás.

Para seguir la misma estructura que en las rutas de la App sólo aparecen componentes de tipo página, vamos a crear el archivo `/pages/Detail/index.js` y allí.

```js
import React from 'react'
import { PhotoCardWithQuery } from '../../containers/PhotoCardWithQuery'

export const Detail = ({ id }) => {
  return <PhotoCardWithQuery id={id} />
}
```

En la App.js nos quedarían las rutas de la siguiente forma:
```js
import React, { useEffect } from 'react'
import { Router } from '@reach/router'

import { GlobalStyles } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Logo } from './components/Logo'

export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <Router primary={false}>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
      </Router>
    </div>
  )
}
```
