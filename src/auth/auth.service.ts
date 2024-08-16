import { User } from '../models/User';
import { AuthRepository } from './auth.repository';
import { UserNotFound } from '../exceptions/UserNotFound.exception';
import { ServerError } from '../exceptions/ServerError.exception';

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    const user = await this.authRepository.findUserByEmail(email);
    if (!user) {
      throw new UserNotFound('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ServerError('Credenciales inválidas');
    }

    const token = jwt.sign({ id: user.id, email: user.correo }, process.env.JWT_SECRET as string, {
      expiresIn: '1h', 
    });

    return { token, user };
  }

  async updatePartial(userId: string, updates: Partial<User>) {
    return await this.authRepository.updateUserPartial(userId, updates);
  }

  async updateTotal(userId: string, userData: User) {
    return await this.authRepository.updateUserTotal(userId, userData);
  }
}


