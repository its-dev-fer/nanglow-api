import { Request, Response } from "express";
import { CategoriaService } from "./categoria.service";
import { UserNotFound } from "../exceptions/UserNotFound.exception";

export class CategoriaController {
  private categoriaService : CategoriaService;

  constructor( ){
    this.categoriaService = new CategoriaService();
  }

  async deleteCategoria(req: Request, res: Response) {
    try {
      const idCategoria = req.params.idCategoria;
      await this.categoriaService.deleteCategoria(idCategoria)
      console.log()
      return res.status(204).send(); // Respuesta sin contenido
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar una Categoria' });
    }
  }

  // Nuevo método para obtener todos los usuarios, incluidos los eliminados
  async getAllCategorias(req: Request, res: Response) {
    try {
      const categorias = await this.categoriaService.getAllCategorias();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener las Categorias' });
    }
  }
  
}
