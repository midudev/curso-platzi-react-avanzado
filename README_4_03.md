Cargar todas las cards, cuando el usuario no las está viendo, es un gasto innecesario. Para solucionarlo, vamos a crear nuestro propio sistema de lazy load. Lo haremos usando React hooks y lo llamaremos `useNearScreen`.

Lo primero que tenemos que conseguir es recuperar cada elemento del árbol de elementos, del DOM. Para ello vamos a utilizar otro hook llamado `useRef` que nos permite guardar en una variable la referencia a ese elemento.

En `PhotoCard` hacemos lo siguiente:
```js
import React, { useRef } from 'react'

export const PhotoCard = ({ id = 0, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  console.log(ref)
  // ...
}
```

Gracias al console.log, vemos que las referencias son siempre null. Esto es porque antes de renderizar, el elemento no existe. Podríamos poner un debugger, para detener la ejecución y veríamos que, es normal, ya que todavía no se ha renderizado ningún elemento.

Para solucionar esto, podemos usar el hook `useEffect` que se ejecutará después de renderizar el componente, de forma que vemos si ahí podemos recuperar el elemento.

```js
import React, { useEffect, useRef } from 'react'

export const PhotoCard = ({ id = 0, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  useEffect(function () {
    console.log(ref)
  }, [ref])
}
```

Podemos ver que ahora sí se actualiza el valor de ref y que dentro tenemos un objeto con la propiedad current y, como valor, el elemento del árbol. Con esto ya podemos pasar a utilizar Intersection Observer.

Intersection Observer es una API que nos permite observar cuando un elemento está dentro del viewport de nuestra página, de forma que podamos realizar alguna acción cuando eso ocurra.

```js
  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      console.log(entries)
    })
    observer.observe(ref.current)
  }, [ref])
```

Revisamos en las herramientas de desarrollo todos los IntersectionObserverEntry y vemos que algunos tienen `isIntersecting` a `true`. Lo veremos más fácilmente así:

```js
  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting, target } = entries[0]
      console.log({ isIntersecting, target })
    })
    observer.observe(ref.current)
  }, [ref])
```

Ahora que ya sabemos cuando un elemento está o no en el viewport, vamos a añadir un estado a nuestro componente para indicar cuando se tiene que mostrar o no. Cuando esté haciendo intersección, entonces actualizamos el estado y enseñamos un mensaje en consola. Además, cuando ya hayamos entrado aquí, podemos desconectar el observador, ya que no es necesario que siga funcionando.

```js
const [show, setShow] = useState(false)

useEffect(function () {
  const observer = new window.IntersectionObserver(function (entries) {
    const { isIntersecting, target } = entries[0]
    if (isIntersecting) {
      console.log(target, 'entra en el viewport')
      setShow(true)
      observer.disconnect()
    }
  })

  observer.observe(ref.current)
}, [ref])
```

Ahora, con este estado, lo que vamos a hacer es renderizar o no el componente, dependiendo si el usuario lo está viendo en la pantalla.

```js
{
  show &&
  <Fragment>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
    </a>

    <Button>
      <MdFavoriteBorder size='24px' /> {likes} likes!
    </Button>
  </Fragment>
}
```

Antes de irnos, tenemos que recordar que queremos que cada vez que se desmonte el componente se limpie el evento de observar el elemento, para ello, tendremos que hacer que el `useEffect` devuelva una función para desconectarnos.

```js
const [show, setShow] = useState(false)

useEffect(function () {
  const observer = new window.IntersectionObserver(function (entries) {
    const { isIntersecting, target } = entries[0]
    if (isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  })

  observer.observe(ref.current)
  return () => observer.disconnect()
}, [ref])
```

Intersection Observer es una característica que no está soportada por todos los navegadores.
https://caniuse.com/#search=intersection%20observer

En el caso que tengas que soportar versiones de navegadores antiguas, es posible que tengas que necesitar un polyfill, esto es, una biblioteca que simule esta funcionalidad, para hacer como si tu navegador ya la tuviera disponible.

Podemos instalar el polyfill oficial de la W3C: https://github.com/w3c/IntersectionObserver/tree/master/polyfill

```js
  useEffect(function () {
    import("intersection-observer")
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref])
```

Esto nos da un error que nos dice que la sintaxis para dynamicImport no la tenemos activada en Babel.

Tenemos que instalar: https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
`npm install @babel/plugin-syntax-dynamic-import -D`

Una vez instalado, vamos a la configuración de Webpack y añadimos este nuevo plugin:
```js
plugins: [
  'babel-plugin-styled-components',
  '@babel/plugin-syntax-dynamic-import'
]
```

Ahora reiniciamos el servidor de desarrollo.
Volvemos a la página.
Revisamos la pestaña Network, vemos el chunk de intersection-observer.

Vamos a hacer un polyfill condicional, de forma que si nuestro navegador no soporta Intersection Observer entonces cargaremos el polyfill. Y si lo soporta, pues usaremos el nativo del navegador.

```js
Promise.resolve(
  typeof window.IntersectionObserver !== 'undefined'
    ? window.IntersectionObserver
    : import("intersection-observer")
).then(() => {
```

Ahora, revisando la pestaña network vemos que este chunk ya no lo cargamos, ya que este navegador no necesita usar un polyfill para usar Intersection Observer.

Antes de terminar, si revisamos el código, vemos que el linter nos está dando un error en el código. Nos dice que no puede parsear esta linea y esto es porque los imports dinámicos todavía no son una parte oficial del lenguaje Javascript por lo que eslint no tiene soporte nativo.

Para solucionar esto, debemos instalar el paquete `babel-eslint`, que nos permite soportar también sintaxis experimental.

```
npm install babel-eslint -D
```

Una vez instalado, vamos a ir a nuestro archivo `package.json` y allí a la configuración de `eslintConfig` añadimos la key `parser`, para indicarle que en lugar de usar el analizador por defecto de eslint, vamos a usar el de `babel-eslint`. Una vez hecho esto, si volvemos al archivo, veremos que el error ha desaparecido.

Ahora que ya lo tenemos todo funcionando, antes de acabar la clase, vamos a desacoplar esta funcionalidad a un custom hook que llamaremos `useNearScreen`.

Copiamos todo lo referente al hook.
Creamos el archivo `/hooks/useNearScreen.js` y copiamos el contenido.
Lo amoldamos para usar los imports necesarios.
Hacemos que devuelva un array con `[show, ref]`.

Importamos y usamos el nuevo custom hook useNearScreen en nuestro componente.