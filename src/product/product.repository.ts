import { Product } from "../models/Product";

//  excepción 
class ProductCategoryNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductCategoryNotFoundError";
  }
}

interface WhereProducts {  
  where: {  
    categoria: number;  
  };  
  limit?: number;  
}

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
      const options: WhereProducts = {
        where: { categoria: id_categoria },
      };

      if (limit) {
        options.limit = limit;
      }

      const products = await Product.findAll(options);
      return products;
    } catch (error) {
      
      throw new ProductCategoryNotFoundError(`Error al encontrar productos por categoría: ${error}`);
    }
  }
}
