import { Router } from 'express';
import { AuthController } from './auth.controller';


const router = Router();
const authController = new AuthController();

// add auth routes here

router.patch('/user/:id', (req, res) => authController.updateUserPartial(req, res));
router.put('/user/:id', (req, res) => authController.updateUserTotal(req, res));

export default router;
