En esta clase, vamos a hacer que la experiencia de desarrollo sea la adecuada instalando Standard. Standard nos va a proporcionar unas reglas de lintado y formateo de nuestro código, basado en no usar puntos y coma, de forma que tendremos que hacer las minimas configuraciones posible. Poner puntos y coma o no en Javascript es una preferencia muy personal, en este caso voy a usar este linter, pero es tu decisión usar este u otro. Siéntete libre de usar el que más te guste.

```
npm install standard --save-dev
```

Una vez que lo tenemos instalado, lo ejecutamos por primera vez usando el comando `./node_modules/.bin/standard`.

Vamos a añadir un script en nuestro package.json para que siempre que queramos podamos lintar el código.

```json
  "lint": "standard",
```

Ahora, vamos a solucionarlos.

Esto está bien pero me gustaría contar con estos avisos directamente en el editor. Para ello, yo cuento con dos extensiones para Visual Studio Code: eslint y prettier. Sé que existe una extensión que directamente te permite usar Standard en el editor pero, en mi caso, me gusta que mi editor se pueda adaptar muy rápidamente a diferentes proyectos con configuraciones para el linter distintas.

Para que funcionen como espero, lo primero que tengo que hacer es añadir en el package.json la referencia dónde se encuentra mi configuración con las reglas del linter, de forma que mi editor las pueda encontrar para aplicarlas. Para ello en el package.json añadimos la siguiente configuración:

```json
  "eslintConfig": {
    "extends": ["./node_modules/standard/eslintrc.json"]
  }
```

Ahora, probamos a abrir el archivo `src/index.js` y probar nuestro código. Si añadimos algunos errores, veremos que nos lo muestra. Eso sí, lo que nos gustaría es que se solucionasen solos.

```
Desactivar Format on Save
Activar Prettier Eslint Integration
Activar Eslint Autofix On Save
```

Ahora que ya tenemos todo nuestro entorno preparado vamos a deployar tanto el servidor como nuestra aplicación. Para ello, vamos a utilizar el servicio de Now. Vamos a crear una cuenta totalmente gratuita, para ello, lo único que tenéis que hacer es acceder a `now.sh` y acceder con vuestra cuenta de GitHub.

Una vez le damos los permisos necesarios, ya podremos entrar en nuestro perfil y tendremos diferentes opciones. Una: instalar la app, otra crear los tokens manualmente e instalar el CLI manualmente.

Yo os recomiendo instalar la app, ya que además de ser muy útil, os soluciona tener que preocuparos los tokens.

Vamos a hacer un deploy del server. Antes de continuar, tened en cuenta que es posible que el nombre puede estar ya ocupado, si ese es el caso, cambiadlo por otro dentro de now.json, el que prefiráis.

Ahora, desde nuestra terminal, entramos a la carpeta `api` y allí ejecutamos:
`now`.

Una vez termine, vamos a comprobar que ha funcionado. Vamos a la dirección que nos ha dado y comprobamos.

Luego, vamos a hacer el primer deploy de nuestra app. Volvemos a su carpeta y vamos a crear un archivo `now.json` para configurar algunas cosas del despliegue. Este archivo debe indicar, la versión de deploy que queremos usar y el nombre del deploy.

También vamos a indicarle los builds, estos son como el tipo de construcción de nuestra aplicación. Aquí le decimos que la fuente será el package.json y que queremos que use el build del tipo @now/static-build.

También necesitaremos indicarle qué tiene que hacer con las rutas.
```
{
  "version": 2,
  "name": "petgram",
  "builds": [
    { "src": "package.json", "use": "@now/static-build" }
  ],
  "routes": [
    {"src": "/(.*).js", "dest": "/$1.js"},
    {"src": "/(.*).json", "dest": "/$1.json"},
    {"src": "/.*", "dest": "/index.html"}
  ]
}
```

Una vez tenemos esto, ya estamos preparados para compartir con todos nuestros compañeros nuestra URL, donde podremos enseñarle nuestro proyecto. ¡Seguimos!