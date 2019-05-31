Vamos a hacer una petición fetch para recuperar las categorías en el componente `<ListOfCategories>`.

```
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories)
```

Añadimos un useEffect donde hacíamos la petición del fetch al endpoint de la base de datos que nos devuelve las categorías.

```
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-api.midudev.now.sh/categories')
      .then(res => res.json())
      .then(categories => {
        console.log(categories)
        setCategories(categories)
      })
  })
```

Al comprobar esto, vemos que continuamente hace la llamada. Explicar por qué el useEffect no para de ejecutarse.

Explicar el segundo parámetro del useEffect.

Añadir array vacío.

```
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-api.midudev.now.sh/categories')
      .then(res => res.json())
      .then(categories => {
        console.log(categories)
        setCategories(categories)
      }, [])
  })
```

Los efectos se ejecutan justo después de cada render.

Ahora, vamos a añadir otro efecto en React. A diferencia del componentDidMount y componentDidUpdate, donde antes teníamos todo lo que queríamos hacer en nuestro componente al montarse y actualizarse, ahora con useEffect podemos separar todo lo que queremos hacer en diferentes efectos.

En este caos, vamos a querer que, cuando el scroll pase de una marca, mostremos la lista de las categorías flotando, de forma que podamos, más adelante, navegar a ellas.

Primero vamos a extraer en un método el renderizado de la lista de forma que si se le pasa un parámetro `fixed` a true, entonces tendrá un className más que nos ayudará a cambiarle los estilos.

```js
  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )
```

Vamos a añadir un estado a nuestro componente, que será el que nos ayude a enseñar, o no, la lista de categorias cuando deba. Por ahora lo inicializamos a `true`, para que siempre se muestre.

```javascript
const [showFixed, setShowFixed] = useState(true)
```

Ahora, en el render, ya usamos este estado para hacer un renderizado condicional y mostrar la lista de categorías cuando esto sea verdadero.

```js
{showFixed && renderList(true)}
```

Salen dos listas de categorías pero ningún cambio visual. Tenemos que añadir los estilos en el archivo `styles.js`:

```css
  &.fixed {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  }
```

Para que el efecto que hace que se muestra no sea tan brusco, vamos a usar nuestra utilidad de fadeIn que tenemos preparada de clases anteriores.

```javascript
import { fadeIn } from '../../styles/animations'

  //...

  &.fixed {
    ${fadeIn({ time: '1.5s' })};
```

Ahora sólo nos quedaría usar un efecto para cambiar el estado.

En el efecto creamos una función onScroll que se ejecutará cuando hagamos scroll. Comprueba si es mayor a 200 y si el estado va a ser diferente, lo actualiza, para evitar re-renderizados no necesarios.

Escuchamos el evento de `scroll` en el documento.

Y finalmente, `useEffect` puede devolver una función que se ejecutará justo antes de volver a ejecutarse el efecto o cuando el componente se desmonte completamente.

```js
  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
```

Añadimos unos `console.log` para ver el orden en el que se ejecuta todo.
