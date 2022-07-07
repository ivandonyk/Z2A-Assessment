const { DataTypes } = require('sequelize');

const db = require('../config/db');

const Action = db.define('action', {
  advertiserId: { type: DataTypes.STRING, allowNull: false },
  offerId: { type: DataTypes.STRING, allowNull: false },
  publisherId: { type: DataTypes.STRING, allowNull: false },
  geo: DataTypes.STRING,
  impression: DataTypes.INTEGER,
  click: DataTypes.INTEGER,
  conversion: DataTypes.INTEGER
})

Action.associate = function (models) {
  Action.belongsTo(models.advertiser, { foreignKey: 'advertiserId' })
  Action.belongsTo(models.offer, { foreignKey: 'offerId' })
  Action.belongsTo(models.publisher, { foreignKey: 'publisherId' })
}

module.exports = Action