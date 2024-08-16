import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { UserNotFound } from "../exceptions/UserNotFound.exception";
import { PermisosUsuario } from "../enums/PermisosUsuario";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUserP = {...req.body, permisos : PermisosUsuario.CLIENTE}
      const newUser = await this.authService.createUser(newUserP);
      return res.status(201).json({ message: "Usuario creado con éxito", user: newUser });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await this.authService.login(email, password);
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      } else if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error en el servidor' });
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
      return res.status(500).json({ message: 'Error al actualizar el usuario completamente' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      await this.authService.deleteUser(userId);
      return res.status(204).send(); // Respuesta sin contenido
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar usuario' });
    }
  }

  // Nuevo método para obtener todos los usuarios, incluidos los eliminados
  async getAllUsersIncludingDeleted(req: Request, res: Response) {
    try {
      const users = await this.authService.getAllUsersIncludingDeleted();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
  }

  // Nuevo método para obtener un usuario específico, incluidos los eliminados
  async getUserByIdIncludingDeleted(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await this.authService.getUserByIdIncludingDeleted(userId);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener usuario' });
    }
  }
}
