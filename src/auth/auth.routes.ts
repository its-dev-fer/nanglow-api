import { Router } from 'express';
import { AuthController } from './auth.controller';


const router = Router();
const authController = new AuthController();

// add auth routes here

export default router;
