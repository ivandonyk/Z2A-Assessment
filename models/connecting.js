const { DataTypes } = require('sequelize');

const db = require('../config/db');

const Connecting = db.define('connecting', {
  offerId: { type: DataTypes.STRING, allowNull: false },
  publisherId: { type: DataTypes.STRING, allowNull: false },
})

Connecting.associate = function (models) {
  Connecting.belongsTo(models.offer, { foreignKey: 'offerId' })
  Connecting.belongsTo(models.publisher, { foreignKey: 'publisherId' })
}

module.exports = Connecting