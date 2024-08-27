import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

const productController = new ProductController();

router.post('/',(req, res)=> productController.createProduct(req , res))
router.get('/:id_categoria',(req , res)=> productController.getProductsByCategory(req, res))

export default router;