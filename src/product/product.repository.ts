import { Product } from "../models/Product";

export class ProductRepository {
  async createProduct(productData: Partial<Product>): Promise<Product | null> {
    try {
      const product = await Product.create(productData as Product);
      return product;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      return null;
    }
  }

  async findProductsByCategory(id_categoria: number, limit?: number): Promise<Product[]> {
    try {
      const options: { where: { categoria: number }; limit?: number } = {
        where: { categoria: id_categoria },
      };

      if (limit) {
        options.limit = limit;
      }

      const products = await Product.findAll(options);
      return products;
    } catch (error) {
     
      throw new Error(`Error al encontrar productos por categoría: ${error}`);
    }
  }
}
