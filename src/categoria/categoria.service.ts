import { Categoria } from "../models/Categoria";
import { CategoriaRepository } from "./categoria.repository";

export class CategoriaService {
  private categoriaRepository: CategoriaRepository;

  constructor() {
    this.categoriaRepository = new CategoriaRepository();
  }

  async getAllCategorias() {
    return await this.categoriaRepository.findAllCategorias();
  }

  async deleteCategoria(categoriaId: string) {
    await this.categoriaRepository.deleteCategoria(categoriaId);
  }
}
