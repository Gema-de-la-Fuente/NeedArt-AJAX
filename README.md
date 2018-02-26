# Impletación de AJAX en la página NeedArt.

En esta práctica vamos a ampliar la funcionalidad de la interfaz del escaparate virtual, implementando la funcionalidad de la caja de búsqueda y una lista de países en el formulario de registro.

Para poder realizar las búsquedas en local utilizaremos el servidor JSON SERVER. 
Para poder utilizar este servidor primero hay que instalar el node.js. Una vez instalado se instala el servidor.
![instalacion JSON SERVER](/img/imgREADME/instalarJSONSERVER.PNG)
Una vez instalado para poder cargar el json, nos situamos en la carpeta donde está y abrimos una consola de comandos. Con el comando json-server --watch nombre_json.json.
![cargar json](/img/imgREADME/jsonBUSQUEDA.PNG)
![cargar json](/img/imgREADME/jsonBUSQUEDA.PNG)

## Caja de búsqueda:

La consulta de AJAX al JSON se produce cuando se lanza el evento keyup de la caja de búsqueda. La función llama al json y filtra los resultados. Si hay coincidencia entre lo introducido en la caja de texto y el json se crea una lista con los resultados.
![caja de busqueda](/img/imgREADME/ejemploBusqueda.PNG)

## Lista de paises:

Cuando se carga window se llama a la función listaPaises();
Esta función comprueba el tipo de navegador (en nuestro caso moderno) y abre el archivo del tipo JSON y pone el estado en intercambio efectuado y transacción correcta. Si está todo correcto se enviada la petición y se crean los options con los valores de los países del JSON.
![caja de busqueda](/img/imgREADME/ejemploPaises.PNG)


#### Autoras


 **Gema de la Fuente Romero** - [Github](https://github.com/Gema-de-la-Fuente)
 
 **María Villalobos Martín** - [Github](https://github.com/mariavm6)
