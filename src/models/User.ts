import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';
import { PermisosUsuario } from '../enums/PermisosUsuario';


@Table ({timestamps: true})
export class User extends Model {
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

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  correo!: string;

  @AllowNull(false)
  @Column({
    type: DataType.DATE,
  })
  createdAt?: Date;

  @AllowNull(false)
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
