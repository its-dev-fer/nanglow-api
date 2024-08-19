"use strict";
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: { type: Sequelize.STRING, allowNull: false },
      apellido: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      rfc: { type: Sequelize.STRING, allowNull: false },
      correo: { type: Sequelize.STRING, allowNull: false, unique: true },
      createdAt: { type: Sequelize.DATE, allowNull: true },
      updatedAt: { type: Sequelize.DATE, allowNull: true },
      permisos: {
        type: Sequelize.ENUM("ADMINISTRADOR", "CLIENTE"),
        allowNull: false,
      },
      deletedAt: { type: Sequelize.DATE },
    });
    await queryInterface.createTable("Products", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: { type: Sequelize.STRING, allowNull: false },
      precio: { type: Sequelize.FLOAT, allowNull: false },
      descripcion: { type: Sequelize.TEXT, allowNull: false },
      categoria: { type: Sequelize.STRING, allowNull: false },
      urls: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: true },
      updatedAt: { type: Sequelize.DATE, allowNull: true },
      deletedAt: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
    await queryInterface.dropTable("Products");
  },
};
