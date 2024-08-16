// src/config/database.ts
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { User } from '../models/User';

type dbType = {
    sequelize: Sequelize,
    Sequelize: typeof Sequelize,
};

const db: dbType = {} as dbType;

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USER ?? 'lizzy',
    password: process.env.DB_PASSWORD ?? '1980',
    database: process.env.DB_NAME ?? 'nanoglow',
    models: [User],
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
