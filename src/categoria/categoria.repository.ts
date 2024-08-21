import { Categoria } from "../models/Categoria";

export class CategoriaRepository {

  async deleteCategoria(categoriaId: string) {
    const categoria = await Categoria.findByPk(categoriaId);
    if (!categoria) {
      throw new Error(`Categoria with ID ${categoriaId} not found`);
    }
    await categoria.destroy();
  }

  async findAllCategorias() {
    return await Categoria.findAll();
  }
}
