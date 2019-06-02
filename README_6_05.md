Para conseguir tener rutas protegidas en nuestra aplicación simplemente tenemos que hacer un renderizado condicional. Pongamos como ejemplo la ruta de favoritos y usuario. En estos dos casos, si el usuario no está registrado, vamos a querer que vaya a una página totalmente diferente.

Vamos a crear las páginas `Favs` y `Profile` en la carpeta `pages`:

```js
import React from 'react'

export const Favs = () => {
  return <h1>Favs</h1>
}
```

Ahora en nuestro componente `App.js` vamos a utilizar estas nuevas páginas con sus rutas correspondientes para que el usuario pueda acceder a ellas.

```js
  <Favs path='/favs' />
  <Profile path='/user' />
```

Si navegamos por la aplicación, veremos que podemos navegar perfectamente por ellas. Pero hemos dicho que si el usuario no está registrado, vamos a querer evitar que pueda acceder a ellas. 

Vamos a crear la página `NotRegistered`, para los usuarios que no estén registrados.

```js
import React from 'react'

export const NotRegistered = () => {
  return <h1>NotRegistered</h1>
}
```

Ahora en nuestro archivo `App.js` vamos a simular que tenemos una forma para recuperar si el usuario está registado o no, para así que las rutas vayan a una página u otra.

Para ello, vamos a crear un componente que recibe una render prop, esta render prop es una función que ejecutaremos pasándole si el usuario está logueado y así podremos renderizar diferentes cosas dependiendo de ello.

```js en App.js
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
```

Con este componente que recibe una render prop, vamos a usarlo en el nuestro archivo de rutas, de forma que si el usuario está logueado, vamos a crear una parte del router donde el usuario podrá acceder a ciertas páginas pero, si no está registrado, entonces lo dirigiremos a otras páginas donde tendrá que registrarse.

```js en App.js
<div>
  <Logo />
  <GlobalStyles />
  <Router>
    <Home path='/' />
    <Home path='/pet/:id' />
    <Detail path='/detail/:id' />
  </Router>

  <UserLogged>
    {
      ({ isAuth }) =>
        isAuth
          ? <Router>
            <Favs path='favs' />
            <Profile path='user' />
          </Router>
          : <Router>
            <NotRegistered path='favs' />
            <NotRegistered path='user' />
          </Router>
    }
  </UserLogged>
  <NavBar />
</div>
```

¡Ya lo tenemos! En las próximas clases veremos como podemos iniciar sesión y registrar a nuestro usuario.
