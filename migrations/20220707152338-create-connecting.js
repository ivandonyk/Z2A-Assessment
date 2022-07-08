'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Connectings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      offerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Offers', key: 'id', as: 'offerId' },
      },
      publisherId: {
        type: Sequelize.INTEGER,
        references: { model: 'Publishers', key: 'id', as: 'publisherId' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Connectings');
  }
};