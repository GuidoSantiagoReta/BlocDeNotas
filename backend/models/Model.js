//importar conexion a la DB
import db from "../database/db.js";

//importar modulo de sequelize
import { DataTypes } from "sequelize";

//En el caso que tengamos otro tipo de datos se define por ejemplo .NUMBER)


const Model = db.define('posts',{
    title:{type: DataTypes.STRING},
    content: {type:DataTypes.STRING},
});

export default Model
