'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Offers', {
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
      title: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      payout: {
        type: Sequelize.INTEGER
      },
      kpi: {
        type: Sequelize.INTEGER
      },
      description:{
        type: Sequelize.STRING
      },
      currency: {
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
    await queryInterface.dropTable('Offers');
  }
};