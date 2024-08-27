import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, AllowNull, Unique } from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true }) 
export class Categoria extends Model<Categoria> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id_categoria!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  nombre!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  foto!: string;

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

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
  })
  deletedAt?: Date;

}
