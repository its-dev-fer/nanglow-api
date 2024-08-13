import { Sequelize } from 'sequelize-typescript';
import { Op } from "sequelize";
import { User } from '../models/User';

type dbType = {
    sequelize: Sequelize,
    Sequelize: typeof Sequelize,
};

const db: dbType = {} as dbType;

const sequelize = new Sequelize({
    dialect: "postgres",
    operatorsAliases: {
        $iLike: Op.like
    },
    host: process.env.DB_HOST ?? 'localhost',
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'nanoPassword13/08', // Cambia esto por tu contraseña
    database: process.env.DB_NAME ?? 'nanoglow', // Cambia esto por el nombre de tu base de datos
    models: [User],
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
