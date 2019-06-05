Tenemos que permitir que el usuario pueda cerrar la sesión sin necesidad de abrir las herramientas de desarrollo. Lo primero que vamos a hacer es añadir a nuestro contexto un método que, al llamarlo, borrará el token del sessionStorage y cambiará su estado.

```js
  removeAuth: () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }
```

Ahora, en el componente `Profile` vamos a importar el Contexto, y añadimos un botón que podremos usar para que el usuario pueda cerrar sesión cuando quiera.

```js
import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'

export const Profile = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <h1>Profile</h1>
    <button onClick={removeAuth}>Cerrar sesión</button>
  </Fragment>
}
```

Ahora, este botón no es que sea muy bonito. Vamos a extraer el botón que habíamos estilado para los formularios en un componente, para que lo podamos reutilizar aquí también.

```js
import React from 'react'
import {StyledButton} from './styles'

export const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
)
```

Y los estilos:
```js
import styled from 'styled-components'

export const StyledButton = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
`
```

Ahora, usaremos este botón directamente también en los formularios del componente `userForm`.