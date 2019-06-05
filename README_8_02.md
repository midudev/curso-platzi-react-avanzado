A la hora de revisar la performance de nuestro sitio, vamos a compilar la aplicación en modo desarrollo con webpack con el siguiente comando.

```
./node_modules/.bin/webpack --mode "development"
```

Ahora, vamos a servir esta página:
```
npx serve dist -s
```

Para no tener que repetir estos pasos vamos a crear un script en nuestro package.json:
```
"serve:dev": "webpack --mode development && npx serve dist -s",
```

Muy bien, ahora vamos al puerto 5000 de localhost y vemos nuestra aplicación funcionando. Abrimos las herramientas de desarrollo.

Abrimos la pestaña Performance.

- Explicar CPU y Network.
- Explicar User Timings.
- Explicar Screenshots.
- Explicar las marcas de DCL, FP, FCP
- React Profiler

Con React Profiler vemos que al hacer click en una categoría, se vuelve a renderizar la lista de Categorias pero esto no parece necesario, ya que las categorías son exactamente las mismas.

Para evitar los re-renderizados podríamos usar React.memo. Esta funcionalidad de React de lo que se trata es de envolver un componente para indicarle que sólo se debe volver a renderizar si las props cambian.

```js
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
```

Revisamos en el React Profiler para ver que al hacer click en el mismo icono ahora no se vuelve a re-renderizar.

Lo mismo podríamos ver con el componente página de la Home y es que, React.memo.

```js
export const Home = React.memo(HomePage)
```

Pero, como podemos comprobar... esto no funciona. Esto es porque el componente Home en realidad recibe muchas otras props, no sólo la id, que pueden ser diferentes y esto hace que se vuelve a renderizar.

Para solucionarlo, React.memo recibe un segundo parámetro que nos permite pasarle una función para comparar las props previas y las nuevas e indicarle si debe memorizar el componente.

```js
export const Home = React.memo(HomePage, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
```