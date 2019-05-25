En esta clase vamos a crear un custom hook llamada `useCategoriesData` para poder recuperar fácilmente los datos de las categorías.

En el archivo `ListOfCategories`, creamos la función `useCategoriesData` y extraemos toda la funcionalidad del componente de recuperar las categorías para meterlo dentro. Nos queda así:

```js
function useCategoriesData () {
  const [categories, setCategoriesData] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-api.midudev.now.sh/categories')
      .then(res => res.json())
      .then(categories => {
        setCategoriesData(categories)
      })
  }, [])

  return { categories }
}
```

Lo usamos de la siguiente forma:
```js
const { categories } = useCategoriesData()
```

Los custom hooks tienen que empezar por la palabra `use` ya que React lo usa internamente para marcar que es un hook e incluirlo en su control. Además eso significa que también sigue las normas de los hooks.

Hasta aquí todo funciona como de costumbre pero vamos a hacer este hook un poco más útil añadiéndole la posibilidad de controlar cuándo está cargando y si ha habido algún error.

```js
function useCategoriesData () {
  const [categories, setCategoriesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)

    setTimeout(function () { // para comprobar el loading
      window.fetch('https://petgram-api.midudev.now.sh/categories')
        .then(res => res.json())
        .then(categories => {
          setCategoriesData(categories)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }, 2000)
  }, [])

  return { error, loading, categories }
}
```

Con esto, ya podemos controlar cuando haya un error a la hora de recuperar los datos o cuando estamos todavía cargándolos.

```js
const { categories, loading } = useCategoriesData()
```

Ahora en el `renderList` podemos usar el loading para renderizar otra cosa si está cargando las categorías:

```js
const renderList = (fixed) => {
  return (
    <Fragment>
      <List className={fixed ? 'fixed' : ''}>
        {
          loading
            ? <Item key='loading'><Category /></Item>
            : categories.map(category =>
              <Item key={category.id}><Category {...category} /></Item>
            )
        }
      </List>
    </Fragment>
  )
}
```

Como queremos que salgan las props por defecto de `<Category>`, vamos a cambiar el DEFAULT_IMAGE para que sea una imagen en gris.

```js
const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
```

Finalmente, vemos que ahora sale algo mientras carga las categorías. Para terminar, vamos a crear la carpeta `hooks` y vamos a mover allí el `useCategoriesData`, para importarlo cuando lo necesitemos.


