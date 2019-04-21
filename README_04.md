# 04

Separar la página Home en /pages/Home y luego en la App.js cargar esto.

Instalar: npm install @reach/router

Ahora, en lugar de cargar la Home directamente, vamos a usar el router de forma que cuando entremos al inicio, podamos cargar el componente Home.

Para poder compartir fácilmente, vamos a crear la ruta del detalle. Para ello, vamos a crear /pages/Detail. Por ahora es un componente vacío que solo recibe la id.

Importamos este componente y lo cargamos en el App.js. Intentamos acceder directamente.

Añadir --history-api-fallback para el webpack-dev-server, de forma que funcione con las rutas.

Añadir en el webpack.config.js la opción del publichPath:
publicPath: '/'

Ahora funciona. Tenemos sin embargo dos problemas. Lo primero es que no tenemos cómo volver a nuestra home pese a que tenemos un par de botones. Vamos a arreglar esto.

En la NavBar, adaptamos los links de forma que:
1. Hacemos un styled(Link) en lugar de styled.a
2. Hacemos que use el estilo de [aria-current] para mostrar cuál está activo.
3. Hacemos que cada Link vaya al path correcto.

Ahora, vamos a conseguir que al hacer click, podamos entrar a un detalle.

Modificamos el componente PhotoCard. De forma que a la imagen ahora se le podrá hacer click para navegar en ella. 

Cuando lo conseguimos, creamos el contenedor FetchDetail, de forma que recuperamos la información de cada imagen.

Es el contenedor que cargaremos en la página del Detalle. Añadimos unos estilos para darle espacio.


