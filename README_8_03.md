Para hacer funcionar nuestra aplicación, estamos utilizando webpack para empaquetar todas nuestras dependencias y así tener un distribuible de nuestra aplicación. Y esto es genial, ya que Webpack se encarga de toda esta gestión.

Sin embargo, resulta que estamos descargando todas las dependencias de una vez cuando, seguramente, no debería ser necesario hacerlo así. De hecho, si estamos en la página Home, ¿por qué deberíamos descargar todo el Javascript de la página del Detalle? O si el usuario no está registrado, por qué debería descargarse todo el código de favoritos.

Para solucionar esto podemos usar los imports dinámicos. En este proyecto ya hemos usado un import dinámico. Lo hemos hecho en nuestro hook que `useNearScreen`:

Esto nos gustaría poder lograrlo también con nuestros componentes de React. ¿Cómo podemos hacerlo? Pues para ello React tiene el método React.lazy, que nos permite renderizar un import dinámico como si fuese un componente de React.

Vamos a probarlo. Para ello, vamos a ir a `App.js` y allí vamos a comentar el import de `Favs` y vamos a crear una constante llamada con el mismo nombre del componente y le asignamos la ejecución de React.lazy. A React.lazy le tenemos que pasar una función que llame a un import dinámico y este devuelve el Componente que queremos renderizar.

```js
// import { Favs } from './pages/Favs'
const Favs = React.lazy(() => import('./pages/Favs'))
```

Para que esto pueda funcionar, vamos a tener que hacer un pequeño cambio en el componente `Favs` y es que devuelva lo que queremos renderizar por defecto.

```js
export default Favs
```

Guardamos los cambios y vemos si esto funciona. Y, como vemos, nos da un error. Nos dice que tenemos un componente de React suspendido mientras lo renderizamos, pero que no estamos dando ningún fallback, esto es, lo que se debería renderizar mientras se carga el componente.

Ya nos da una pista sobre qué debemos añadir para solucionar esto. Es un componente que también nos proporciona la misma biblioteca de React y se llama Suspense. Con Suspense podremos envolver los elementos que queremeos que, cuando carguemos con React.lazy, muestren un fallback a los usuarios mientras se termina de descargar.

```js en App.js
<React.Suspense fallback={<div />}>
```

Vemos en el network cómo funciona esto realmente.

Lo mismo lo podríamos seguir haciendo con el resto de rutas, como por ejemplo, la ruta `Profile`. Ahora que ya sabéis cómo se hace, os animo a que probéis con el resto de rutas y descubráis componentes donde puede tener sentido usar esto.

