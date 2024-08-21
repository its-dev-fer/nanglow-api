import { Request, Response } from "express";
import { ProductService } from "./product.service";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const productData = req.body;
      const newProduct = await this.productService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: "Error creating product", error });
    }
  }
  async getProductsByCategory(req: Request, res: Response): Promise<void> {
    try {
      const { id_categoria } = req.params;
      const { limit } = req.query;
      const products = await this.productService.getProductsByCategory(
        parseInt(id_categoria),
        limit ? parseInt(limit as string) : undefined
      );
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: `Error fetching products: ${error}` });
    }
  }
}
