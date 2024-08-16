import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, Unique } from 'sequelize-typescript';
import { PermisosUsuario } from '../enums/PermisosUsuario';

@Table({ timestamps: true, paranoid: true }) // Configuración para soft delete
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  nombre!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  apellido!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  password!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  rfc!: string;

  @Unique
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  correo!: string;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
  })
  createdAt?: Date;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
  })
  updatedAt?: Date;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM(
      PermisosUsuario.ADMINISTRADOR,
      PermisosUsuario.CLIENTE,
    ),
  })
  permisos!: PermisosUsuario;
}
