const { DataTypes } = require('sequelize');

const db = require('../config/db');

const Offer = db.define('offer', {
  advertiserId: { type: DataTypes.STRING, allowNull: false },
  title: DataTypes.STRING,
  link: DataTypes.STRING,
  payout: DataTypes.INTEGER,
  kpi: DataTypes.INTEGER,
  description: DataTypes.STRING,
  currency: DataTypes.INTEGER
})

Offer.associate = function (models) {
  Offer.belongsTo(models.advertiser, { foreignKey: 'advertiserId' })
  Offer.hasMany(models.action)
}

module.exports = Offer