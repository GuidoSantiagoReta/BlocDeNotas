
# APP POSTS

## TECNOLOGÍAS EN EL BACKEND:

- Node.js
- express
- cors (se utiliza para permitir o restringir recursos solicitados en un servidor web dependiendo de dónde se inició la solicitud HTTP)
- sequelize
- mysql (cliente phpmyadmin)
- dotenv (modulo para manejar las variables de entorno en el backend)


## BACKEND: 
- npm init -y
- "type": "module" (agregar al package json para trabajar con imports)
- npm i express cors mysql sequelize (  ORM PARA TRABAJAR CON  BASES DE DATOS SQL)

### Estructura de directorios:

- database: db.js
- controllers: Controller.js
- routes: routes.js
- models: Model.js
- app.js



### Conexión a la base de datos:

import {Sequelize} from 'sequelize';  //importando el sequelize y creando una nueva instancia/objeto de conexión.

const db = new Sequelize('db_posts', 'root', '',{
    host:'localhost',
    dialect:'mssql'
});

export default db


### Modelo:
- El modelo es una abstracción que representa una tabla en la base de datos.
- El modelo le dice a sequelize la representacion del nombre de la tabla, columnas y tipos de datos de la Base de Datos.


``` 
//importar conexion a la DB
import db from "../database/db";

//importar modulo de sequelize
import { DataTypes } from "sequelize";

//En el caso que tengamos otro tipo de datos se define por ejemplo .NUMBER


const Model = db.define('blogs',{
    title:{type: DataTypes.STRING},
    content: {type:DataTypes.STRING},
});

export default Model 
```

### CONTROLADOR:

- getAllRegisters: Esta función obtiene todos los registros de la base de datos. Utiliza el método findAll() del modelo para buscar todos los registros y luego devuelve estos registros como una respuesta JSON. Si ocurre algún error durante la operación, se captura y se devuelve un mensaje de error.

- getRegister: Esta función obtiene un registro específico de la base de datos basándose en su ID. Utiliza el método findAll() del modelo con una cláusula WHERE para buscar el registro con el ID especificado y luego devuelve este registro como una respuesta JSON. Al igual que en la función anterior, si ocurre algún error, se captura y se devuelve un mensaje de error.

- createRegister: Esta función crea un nuevo registro en la base de datos. Utiliza el método create() del modelo pasándole el cuerpo de la solicitud (req.body) como argumento. Este cuerpo de la solicitud debe contener los datos del nuevo registro. Si la operación tiene éxito, se devuelve un mensaje indicando que el registro fue creado exitosamente. Si ocurre algún error, se captura y se devuelve un mensaje de error.
updateRegister: Esta función actualiza un registro existente en la base de datos. Utiliza el método update() del modelo pasándole el cuerpo de la solicitud (req.body) y un objeto con la cláusula WHERE como argumentos. El cuerpo de la solicitud debe contener los nuevos datos del registro y la cláusula WHERE debe especificar el ID del registro a actualizar. Si la operación tiene éxito, se devuelve un mensaje indicando que el registro fue actualizado exitosamente. Si ocurre algún error, se captura y se devuelve un mensaje de error.

- deleteRegister: Esta función elimina un registro específico de la base de datos basándose en su ID. Utiliza el método destroy() del modelo con un objeto con la cláusula WHERE como argumento. La cláusula WHERE debe especificar el ID del registro a eliminar. Si la operación tiene éxito, se devuelve un mensaje indicando que el registro fue eliminado exitosamente. Si ocurre algún error, se captura y se devuelve un mensaje de error.

<img src="../appPosts/frontend/src/assets/diagram.png" alt=""/>

Realizado con: https://app.eraser.io/

## RUTAS

- Creamos las rutas para cada método del controlador.


## APP.JS

- Conexión a la base datos.
- peticiones http.
- Servidor corriendo en el puerto especificado.


## API TEST

- Thunder Client
- postman


## TECNOLOGÍAS EN EL FRONTEND:
- REACT.JS
- VITE
- AXIOS
- REACT ROUTER DOM
- BOOTSTRAP
- FONTAWESOME
- REACTICONS

## FRONTEND:
- hooks para gestionar los estados de los componentes funcionales.
- useState para devolver un valor con estado y una funcion para actualizarlo.
- useEffect  Los efectos secundarios son operaciones que ocurren fuera del flujo normal de la representación del componente, como obtener datos de una API, configurar suscripciones o modificar el DOM.
- Estructura de rutas en app.jsx

# EJECUTAR APLICACIÓN:

## FRONTEND:
- npm run dev

## BACKEND: 
- nodemon app.js


### Descripcion del backend:

- Crear db mysql en el cliente phpmyadmin.
- Crear tabla en este caso posts (para posteos)
- La db contiene campos: id(autoincremental), titulo(varchar), content(varchar), createdAt(date para trabajar con sequelize), updatedAt(date para trabajar con sequelize).
- Agregando script SQL a la db:

```
INSERT INTO blogs (id, title, content) VALUES
(1, 'Título 1', 'Contenido del primer post'),
(2, 'Título 2', 'Contenido del segundo post'),
(3, 'Título 3', 'Contenido del tercer post'),
(4, 'Título 4', 'Contenido del cuarto post'),
(5, 'Título 5', 'Contenido del quinto post'),
(6, 'Título 6', 'Contenido del sexto post');
```

### CAPTURAS DE LA APLICACIÓN:


<img src="../appPosts/frontend/src/assets/app1.PNG" alt="" />
<img src="../appPosts/frontend/src/assets/app2.PNG" alt=""/>
<img src="../appPosts/frontend/src/assets/app3.PNG" alt=""/>

<img src="../appPosts/frontend/src/assets/responsive1.PNG" alt=""/>
<img src="../appPosts/frontend/src/assets/responsive2.PNG" alt=""/>
<img src="../appPosts/frontend/src/assets/responsive3.PNG" alt=""/>
>>>>>>> master
