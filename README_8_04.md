Conforme tu aplicación se va haciendo más grande, es posible que quieras controlar el tipo de datos de tus props. Si una prop es requerida o si era string o un booleano, para evitar tener errores a la hora de utilizar tus componentes. 

Normalmente para comprobar los tipos de las props podemos usar lenguajes como Flow o Typescript pero si no te interesa aprender un nuevo lenguaje, puedes usar las PropTypes.

Las PropTypes era una utilidad que hace unos años estaba en el core de React pero después decidieron separarlo en un paquete independiente ya que no todos los desarrolladores lo usaban.

Vamos a instalarlo en nuestro proyecto para ver su utilidad.

```
npm install prop-types
```

Vamos a añadir las propTypes en nuestro componente FavButton de forma que si no le pasamos los tipos de datos correcto, nos avise que no estamos haciendo bien algo.

Primero los importamos:
```js en FavButton/index.js
import PropTypes from 'prop-types'
```

Después añadimos la propiedad propTypes.
```js
FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func
}
```

Intercambiamos en el componente `PhotoCard` como usamos los valores `liked` y `likes` de forma que cuando volvamos al proyecto veremos los errores que nos devuelve.

Ahora que lo vemos, lo solucionamos y lo que hacemos es borrar la prop `onClick`. Pero vemos que de esto no nos está avisando. Para ello, podemos decirle que la prop es requerida. Para hacerlo, volvemos a las propTypes y añadimos la propiedad `isRequired`.

```js en FavButton
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
```

Ahora sí, nos avisa que no le hemos pasado la prop a nuestro componente `FavButton` ya que es requerida.

Vamos a hacer lo mismo con el `ListOfFavs`. En este caso la prop que le llega es un array, un tipo de datos que también podemos comprobar fácilmente.

```js
ListOfFavs.propTypes = {
  favs: PropTypes.array
}
```

Pero estó no parece muy útil, verdad? El array podría ser cualquier cosa, podría ser de strings, booleanos o cualquier cosa, menos un objeto, que es lo que queremos. Pues podemos solucionarlo, para ello, podemos usar la propiedad `arrayOf`.

```js
ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.object)
}
```

Esto ha mejorado bastante la comprobación ya que nos estamos asegurando al menos que el array sea de objetos pero... ¿cómo es este objeto? Porque podría venir con cualquier tipo de información.

También está cubierto. Para ello, podemos usar el método `shape` para indicarle con exactitud el objeto que estamos esperando y sus datos.

```js
ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string
  }))
}
```

En nuestro proyecto hemos usado la prop especial `children`. El valor de esta prop es lo que envuelve nuestro componente pero puede ser cualquier cosa. Puede ser un número, un array, un elemento de React. Para este tipo de prop también existe una propType específica, que se llama `node`.

```js
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
```

Para terminar, si todas las propTypes que has visto no son suficientes que sepas que puedes escribir las tuyas propias. Son las custom props y son funciones donde puedes escribir tus propias validaciones.

Vamos a verlo, por ejemplo, en el componente PhotoCard, vamos a añadir las propTypes que tenemos.

```js
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
}
```

Pero, en realidad, nuestra prop `likes` no esperamos que sea un número. Lo que esperamos es que sea un número positivo. Vamos a arreglarlo usando una customProp.

Una customProp no deja de ser una función que recibe las props, el nombre de la prop que queremos validar y el nombre del componente.

```js
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${componentName} - ${propName} value MUST be defined`)
    }

    if (propValue < 0) {
      return new Error(`${componentName} - ${propName} value MUST be positive`)
    }
  }
}
```