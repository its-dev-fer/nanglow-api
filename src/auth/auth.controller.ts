import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { UserNotFound } from "../exceptions/UserNotFound.exception";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUserP = {...req.body, permisos : "CLIENTE"}
      const newUser = await this.authService.createUser(newUserP);
      return res.status(200).json({ message: "Usuario creado con éxito", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async updateUserPartial(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const updates = req.body;
      const updatedUser = await this.authService.updatePartial(userId, updates);
      return res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: "Error al actualizar el usuario parcialmente" });
    }
  }

  async updateUserTotal(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.authService.updateTotal(userId, userData);
      return res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: "Error al actualizar el usuario completamente" });
    }
  }
}
