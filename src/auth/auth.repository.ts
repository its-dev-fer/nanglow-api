import { UserNotFound } from '../exceptions/UserNotFound.exception';
import { User } from '../models/User';

export class AuthRepository {
  async findUserByEmail(email: string) {
    //
  }

  async createUser(user: Partial<User>):Promise <User | null> {
    const userC = await User.create(user);
    
    return userC;
  }

  async updateUserPartial(userId: string, updates: Partial<User>) {
    const user = await User.findByPk(userId);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    return await user.update({...updates, password:updates.password ?? user.password}); 
  }

  async updateUserTotal(userId: string, userData: User) {
    const user = await User.findByPk(userId);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    //return await user.update(userData); cuando el modelo tenga la propiedad password se usara esta linea
  }
  
}