import { User } from "../models/User";
import { AuthRepository } from "./auth.repository";

const bcrypt = require('bcrypt');


export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async createUser(user: Partial<User>) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    const newUser = await this.authRepository.createUser(user);
    return newUser;
  }

  async login(email: string, password: string) {
    //
  }

  async updatePartial(userId: string, updates: Partial<User>) {
    return await this.authRepository.updateUserPartial(userId, updates);
  }

  async updateTotal(userId: string, userData: User) {
    return await this.authRepository.updateUserTotal(userId, userData);
  }
}
