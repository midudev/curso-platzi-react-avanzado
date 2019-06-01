Nuestra barra de navegación está muy bien pero le falta indicarnos dónde nos encontramos cada vez que navegamos entre las diferentes páginas. Esta información es básica para que sea realmente útil. ¿Cómo podemos solucionarlo?

Si revisamos los elementos desde las herramientas de desarrollo, podemos ver que existe un atributo que es añadido de forma automática por @reach/router que nos puede ayudar. Es el atributo aria-current. Este atributo tiene dos objetivos. Primero, nos ayuda en términos de accesibilidad, de forma que los lectores de pantalla sepa indicar que ese elemento representa que la página actual en la que nos encontramos.

Su segundo objetivo ese que podamos estilarlo de forma diferente sin necesidad de tener que revisar la ruta manualmente.

Vamos a hacerlo. En el archivo `styles.js` del Link, vamos a añadir una nueva propiedad para cuando el elemento tenga este atributo.

```js
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;
  }
`
```

Para darle todavía un toque más especial, vamos a añadirle un pequeño símbolo debajo del icono, de forma que veamos mejor. También, podemos usar el efecto de animación que hemos creado previamente.

```js
export const Link = styled(LinkRouter)`
  transition: color .5s ease;
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
```