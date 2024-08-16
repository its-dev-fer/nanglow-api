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
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'Dajagohe3007',
    database: process.env.DB_NAME ?? 'postgres',
    models: [User], // Aquí es donde se registran los modelos
    logging: false, // Desactivar logging de SQL, puedes activarlo si necesitas depurar
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
