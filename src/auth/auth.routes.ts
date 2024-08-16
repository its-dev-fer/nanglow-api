import { Router } from 'express';
import { AuthController } from './auth.controller';
import { UserNotFound } from '../exceptions/UserNotFound.exception';

const router = Router();
const authController = new AuthController();


router.post('/user/', (req, res) => authController.createUser(req,res));
router.post('/login', async (req, res) => authController.login(req, res));
router.patch('/user/:id', (req, res) => authController.updateUserPartial(req, res));
router.put('/user/:id', (req, res) => authController.updateUserTotal(req, res));
router.delete('/user/:id', (req, res) => authController.deleteUser(req, res));

//rutas para obtener usuarios, incluidos los eliminados
router.get('/users', (req, res) => authController.getAllUsersIncludingDeleted(req, res));
router.get('/user/:id', (req, res) => authController.getUserByIdIncludingDeleted(req, res));

export default router;
