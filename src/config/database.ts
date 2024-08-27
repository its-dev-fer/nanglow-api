import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Product } from '../models/Product'; 
import { Categoria } from '../models/Categoria';

type dbType = {
    sequelize: Sequelize,
    Sequelize: typeof Sequelize,
};

const db: dbType = {} as dbType;

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST ?? '127.0.0.1',
    username: process.env.DB_USER ?? 'Aregomz',
    password: process.env.DB_PASSWORD ?? 'ArellunasP13',
    database: process.env.DB_NAME ?? 'postgres',
    models: [User, Product, Categoria],
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };