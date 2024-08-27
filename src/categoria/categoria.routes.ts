import { Router } from "express";
import { CategoriaController } from "./categoria.controller";

const router = Router();
const categoriaController = new CategoriaController();

router.get("/", (req, res) =>
  categoriaController.getAllCategorias(req, res)
);
router.delete("/:idCategoria", (req, res) =>
  categoriaController.deleteCategoria(req, res)
);

export default router;
