'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      advertiserId: {
        type: Sequelize.INTEGER,
        references: { model: 'Advertisers', key: 'id', as: 'advertiserId' },
      },
      offerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Offers', key: 'id', as: 'offerId' },
      },
      publisherId: {
        type: Sequelize.INTEGER,
        references: { model: 'Publishers', key: 'id', as: 'publisherId' },
      },
      geo: {
        type: Sequelize.STRING
      },
      impression: {
        type: Sequelize.INTEGER
      },
      click: {
        type: Sequelize.INTEGER
      },
      conversion: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Actions');
  }
};