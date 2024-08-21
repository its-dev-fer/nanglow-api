import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  DataType,
} from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true }) 
export class Product extends Model<Product> {
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
  titulo!: string;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
  precio!: number;

  @AllowNull(false)
  @Column({
    type: DataType.TEXT,
  })
  descripcion!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  categoria!: number;

  @AllowNull(false)
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  urls!: string[];

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
}