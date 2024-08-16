import { UserNotFound } from '../exceptions/UserNotFound.exception';
import { User } from '../models/User';

export class AuthRepository {
  async findUserByEmail(email: string) {
      const user = await User.findOne({ where: { correo: email } });
      return user;
  }

  async createUser(user: Partial<User>):Promise <User | null> {
    const userC = await User.create(user as User);
    
    return userC;
  }

  async updateUserPartial(userId: string, updates: Partial<User>) {
    const user = await User.findByPk(userId);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    return await user.update({ ...updates, password: updates.password ?? user.password });
  }

  async updateUserTotal(userId: string, userData: User) {
    const user = await User.findByPk(userId);
    if (!user) throw new UserNotFound('Usuario no encontrado');
<<<<<<< HEAD
    return await user.update(userData);
=======
    return await user.update(userData); 
>>>>>>> ea3ca29 (index modificado con el sequelize para que funcione el update)
  }

  async deleteUser(userId: string) {
    const user = await User.findByPk(userId);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    await user.destroy(); // Realiza la eliminación suave
  }

  // método para obtener todos los usuarios, incluidos los eliminados
  async findAllUsersIncludingDeleted() {
    return await User.findAll({ paranoid: false });
  }

  //método para obtener un usuario específico, incluidos los eliminados
  async findUserByIdIncludingDeleted(userId: string) {
    const user = await User.findByPk(userId, { paranoid: false });
    if (!user) throw new UserNotFound('Usuario no encontrado');
    return user;
  }
}
