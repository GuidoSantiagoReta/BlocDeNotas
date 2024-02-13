import express from "express";
import cors from 'cors';
// Importar conexión a la base de datos
import db from "./database/db.js";
//importar enrutador
import router from "./routes/routes.js";



const app = express();

// configurar cors
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(express.json())

app.use('/posts', router)

try {
    await db.authenticate()
    console.log('Conectado exitosamente a la base de datos')
} catch (error) {
    console.log(`Error de conexión: ${error}`)
}


/*app.get('/',(req, res)=>{
    res.send('escuchando desde el servidor')
});*/

app.listen(3001,()=>{
  console.log('server running in http://localhost:3001/')  
}
);