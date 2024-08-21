import { ProductRepository } from "./product.repository";
import { Product } from "../models/Product";
import test from "node:test";

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }
  async createProduct(productData: Partial<Product>): Promise<Product | null> {
    return this.productRepository.createProduct(productData);
  }
  async getProductsByCategory(
    id_categoria: number,
    limit?: number
  ): Promise<Product[]> {
    try {
      return this.productRepository.findProductsByCategory(id_categoria, limit);
    } catch (error) {
      throw new Error(
        `Error in ProductService getProductsByCategory: ${error}`
      );
    }
  }
}
