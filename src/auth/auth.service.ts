import { User } from '../models/User';
import { AuthRepository } from './auth.repository';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async register(user: Partial<User>) {
    //
  }

  async login(email: string, password: string) {
    //
  }
}
