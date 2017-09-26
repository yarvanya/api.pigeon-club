'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      avatar: {
        type: Sequelize.STRING(200000),
        allowNull: true
      },
      birthDate: {
        type: Sequelize.DATEONLY
      },
      address: {
        type: Sequelize.STRING(255)
      },
      city: {
        type: Sequelize.STRING(100)
      },
      country: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        type: Sequelize.BIGINT
      },
      updatedAt: {
        type: Sequelize.BIGINT
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Profiles')
};
