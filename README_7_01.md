Para poder saber en cualquier parte de nuestra aplicación si el usuario está registrado o no, vamos a utilizar el Contexto de React. El Contexto de React es una forma de pasar datos a través del árbol de componentes sin tener que utilizar estas props manualmente en cada nivel.

De esta forma, podemos tener unos datos globales, legibles desde cualquier punto. Además, como veremos, podemos hacer que el Contexto sea dinámico, esto es que se pueda actualizar. De esta forma estaríamos consiguiendo en muy pocas líneas, tener un estado global en nuestra aplicación.

Vamos a empezar creando el Contexto, para ello vamos a crear un archivo `Context.js` que dejamos junto a `App.js`:

```js en Context.js
import { createContext } from 'react'
const Context = createContext()

export default Context
```

Una vez creado, el Context es un objeto con dos componentes. Uno es el Provider, que es el componente con el que tenemos que envolver los elementos que queremos que tengan acceso a este Contexto. En nuestro caso, queremos que esté disponible en toda la aplicación así que vamos al punto de entrada `index.js` y allí lo usamos.

Al Provider hay que pasarle el valor que queremos que tenga nuestro Contexto, por ahora, vamos a hacer que tenga un objeto donde `isAuth` sea false.

```js
ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
```

Ahora, para utilizar el componente sólo tenemos que ir a la `App.js` y usarlo en lugar del componente `UserLogged`

!! Recordar borrar el código de `App.js` de `UserLogged`.

```js en App.js
<Context.Consumer>
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
</Context.Consumer>
```

Ahora que tenemos esto, vamos a hacer nuestro contexto más dinámico. Para ello, vamos a hacer que el Provider que creamos en el Context tenga un estado local que nos dirá si el usuario está registrado o no. Por defecto, lo vamos a dejar como false.

Lo interesante es que en este componente, vamos a exponer una forma de actualizar si el usuario ha iniciado sesión o no. Esto lo expondremos gracias a pasárselo al proveedor del contexto como value.

```js
import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
```

Primero, en el `index.js` ya podemos eliminar el `value` que le pasábamos al Provider, ya que no será necesario:

```js
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
```

Ahora, en nuestro componente que mostrábamos al usuario cuando no estaba registrado, vamos a añadir un formulario de forma que permitas al usuario que pueda "iniciar sesión". Al menos virtualmente.

```js
import React from 'react'
import Context from '../../Context'

export const NotRegistered = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <form onSubmit={activateAuth}>
              <button>Iniciar sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
```