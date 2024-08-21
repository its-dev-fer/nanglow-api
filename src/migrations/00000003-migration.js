"use strict";
const sequelize = require("sequelize");
const { Op } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      categoria: {type: sequelize.INTEGER, allowNull: false},
      urls: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: true },
      updatedAt: { type: Sequelize.DATE, allowNull: true },
      deletedAt: { type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};