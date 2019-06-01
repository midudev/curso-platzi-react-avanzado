Para poder navegar más fácilmente entre las diferentes páginas de nuestra aplicación, vamos a crear una navbar que aparecerá en la parte inferior de nuestra aplicación.

Creamos el archivo `/components/NavBar/index.js`:
```js
import React from 'react'

export const NavBar = () => {
  return (
    <nav>
      <button>home</button>
      <button>favs</button>
      <button>user</button>
    </nav>
  )
}
```

Ahora lo usamos en el archivo `App.js` y lo dejamos debajo de las rutas.

```js
  {...}
  </Router>
  <NavBar />
```

Nos cuesta encontrar el navbar, ya que está abajo del todo y con tan pocos estilos casi que no se le ve. Vamos a preparar algunos estilos para que lo podamos ver fácilmente.

Tras jugar con el navegador para encontrar los estilos que queremos, creamos el archivo `styles.js` y los usamos para el elemento `nav`:

```js
import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`
```

Ahora usamos este componente Nav en nuestra app.

```js
import {Nav} from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <button>home</button>
      <button>favs</button>
      <button>user</button>
    </Nav>
  )
}
```

Estos botones por ahora no funcionan, vamos a hacer que sean enlaces que hagan una navegación utilizando el Router de nuestra aplicación. Para ello, en los styles, vamos a estilar el componente Link y lo exportamos.

```js
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`
```

En el componente `NavBar` ahora podemos usar este nuevo componente para crear los enlaces y poder navegar usando esta barra de navegación.

```js
import { Link, Nav } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>home</Link>
      <Link to='/favs'>favs</Link>
      <Link to='/user'>user</Link>
    </Nav>
  )
}
```

Antes de terminar, vamos a darle un toque un poco más profesional. Para ello vamos a usar iconos en lugar de texto.

```js
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  )
}
```

Ya tenemos una barra de navegación en nuestra aplicación para poder movernos entre las diferentes secciones que tenemos.
