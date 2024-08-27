import { Categoria } from "../models/Categoria";
import { CategoriaNotFound } from "../exceptions/CategoriaNotFound.exception";

export class CategoriaRepository {

  async deleteCategoria(categoriaId: string) {
    const categoria = await Categoria.findByPk(categoriaId);
    if (!categoria) {
      throw new CategoriaNotFound(`Categoria with ID ${categoriaId} not found`);
    }
    await categoria.destroy();
  }

  async findAllCategorias() {
    return await Categoria.findAll({ paranoid: false });
  }
}
