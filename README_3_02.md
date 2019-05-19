Crear la carpeta `ListOfCategories`.
Crear el archivo `index.js`

Primera implementación del componente:
```
import React from 'react'
import { Category } from '../Category'

import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <ul>
      {
        categories.map(category => <li><Category {...category} /></li>)
      }
    </ul>
  )
}
```

Usamos el componente en la `App.js`.

Vemos el warning. Añadimos la key, para hacer que el componente tenga una key única. Para ello usamos el `category.id`.

Creamos los styles en el archivo `styles.js`

```js
import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
`

export const Item = styled.li`
  padding: 0 8px;
`
```

Usamos los estilos en nuestro componente.

Vemos que todavía no se ve del todo bien. Tiene los puntos de las listas y además hay un efecto al hacer scroll un poco molesto. Añadimos estilos globales.

Crear archivo `GlobalStyles` al lado del `App.js`.

```js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
```

Lo importamos dentro de `App.js` y quedaría de la siguiente forma:

```
import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'

export default function () {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
    </div>
  )
}
```
