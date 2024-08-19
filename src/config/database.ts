import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Product } from '../models/Product'; 

type dbType = {
    sequelize: Sequelize,
    Sequelize: typeof Sequelize,
};

const db: dbType = {} as dbType;

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'nanoglow2024',
    database: process.env.DB_NAME ?? 'nanoglow',
    models: [User, Product],
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };