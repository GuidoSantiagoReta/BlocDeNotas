
// importar modelo
import Model from "../models/Model.js";

// Metodos para la App 

//Mostrar registros

export const getAllRegisters = async (req, res) =>{
  try {
   const registers = await Model.findAll()
   res.json(registers)
  } catch (error) {
    res.json( {message: error.message})
  }
}


//Mostrar registro
export const getRegister = async (req, res) =>{
    try {
       const register = await Model.findAll({
         where:{id: req.params.id}
         })
         res.json(register[0])
        
    } catch (error) {
       res.json ({message: error.message})
    }
}

//Crear registro     
export const createRegister = async (req, res) =>{
    try {
       await Model.create(req.body)
       res.json({
          "message":"registro creado exitosamente"
       });
    } catch (error) {
      res.json ({message: error.message})
    }
}

//Actualizar registro
export const updateRegister = async (req,res) =>{
   try {
    await Model.update(req.body,{
      where:{id: req.params.id}
     })
     res.json({
      "message":"registro actualizado exitosamente"
     })
   } catch (error) {
    res.json ({message: error.message})
   }
}


//Eliminar registro
export const deleteRegister = async (req, res) =>{
  try {
    await Model.destroy({
        where:{id: req.params.id} 
    })
    res.json({
      "message":"registro eliminado exitosamente"
     })
  } catch (error) {
    res.json ({message: error.message})
  }
}