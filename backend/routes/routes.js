import express from 'express';
import { createRegister, deleteRegister, getAllRegisters, getRegister, updateRegister } from '../controllers/Controller.js';

const router = express.Router();


router.get('/', getAllRegisters);
router.get('/:id', getRegister);
router.post('/', createRegister);
router.put('/:id', updateRegister);
router.delete('/:id', deleteRegister);

export default router


