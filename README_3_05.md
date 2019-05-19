Enseñamos el problema que las imágenes se muestran de golpe.

Añadimos en el `styles.js` de `PhotoCard` una forma de mostrar gradualmente la imagen.

```js
import styled, { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const Img = styled.img`
  animation: 1s ${fadeInKeyFrames} ease;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`
```

Enseñamos el efecto.

Creamos la función para mostrar que puede ser totalmente reutilizable.

```js
const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyFrames} ${type}`

export const Img = styled.img`
  ${fadeIn()};
  ...
```

Actualizamos el time, para que se vea la diferencia.

```js
export const Img = styled.img`
  ${fadeIn({ time: '5s' })};
  ...
```

Este efecto para las imágenes nos gusta mucho, así que vamos a usarlo también para las imágenes de las categorías. Para eso, vamos a mover la función a un archivo externo, de forma que lo podemos reutilizar.

Creamos la carpeta `styles` y dentro añadimos las animaciones en un archivo `animations.js` tal que así:

```js
import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyFrames} ${type}`
```

Eliminamos los imports innecesarios en los estilos del componente y añadimos el import del nuevo fadeIn.

Ahora ya podemos utilizarlo en el `styles.js` del componente `<Category />`.

Antes de acabar, vamos a aprovechar para mover el archivo `GlobalStyles.js` dentro de esta nueva carpeta `styles` para que nuestro código quede mejor estructurado.



