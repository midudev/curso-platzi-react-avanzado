Crear el SVG con https://maketext.io/
  Fuente: Pacifico
  Colores: #b500b5, a #ff8c00

Optimizar con SVGO: https://jakearchibald.github.io/svgomg/

Usamos SVGR playground para crear el componente: https://github.com/smooth-code/svgr

Creamos el archivo `/components/Logo/index.js` con el contenido de SVGR, le cambiamos el nombre y lo usamos en `App.js`.

Como se ve enorme, tenemos que arreglar los estilos. Creamos el archivo `styles.js`.

```
import styled from 'styled-components'

export const Svg = styled.svg`
  width: 220px;
  margin-top: -30px;
  margin-left: -10px;
`
```

Usamos este nuevo componente `Svg` en el componente.