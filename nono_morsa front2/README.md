# Web-Front

## Instalación Front

```bash
npm install
bower install
```

## Requisitos para replicar las pruebas:

* Tener instalado PostgreSQL

* Correr el archivo “SQL Morsa LALS.sql”.
    Se creara una base de datos, un usuario y una tabla; se insertaran 3 registros en esta misma.
    precaucion: Se creara una BD llamada api_user_nono, 
    verifica que no tengas una BD con el mismo nombre para evitar perdida de datos.

* En PostgreSQL: 
    Se Creara un usuario con nombre; ‘nono’, clave: ‘123456’,
    Escuchar PostgreSQL en el puerto 5432, o bien remplazar la información 
    del usuario en el archivo “\nono_morsa\server\datasources.js” (backend)

* Ir a la carpeta “nono_morsa”. Ejecutar “npm install”.
    si ocurre algún error: eliminar la carpeta “node_modules” e intentar de nuevo.
    Correr el servidor con “node .”
    Si todos los datos están en orden obtendrás una respuesta en la URL: “localhost:3000/”

* Para probar el back-end, realizar peticiones en 'http://localhost:3000/explorer/'

* Ir a la carpeta “nono_morsa front2”. Ejecutar “npm install”.
    si ocurre algún error: eliminar la carpeta “node_modules” e intentar de nuevo.
    Correr el servidor con “npm run serve”

* Probar el programa.


## Configuración

* `/conf/browsersync.conf.js` Configuración servidor
* `/src/index.js` Configuraciones especiales de acuerdo al host
* `/src/index.html` Ocacionalmente algunas configuraciones
