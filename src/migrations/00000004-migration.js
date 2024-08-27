"use strict";
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Categoria", {
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: { type: Sequelize.STRING, allowNull: false },
      foto: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: true },
      updatedAt: { type: Sequelize.DATE, allowNull: true },
      deletedAt: { type: Sequelize.DATE, allowNull: true },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Categoria");
  },
};
