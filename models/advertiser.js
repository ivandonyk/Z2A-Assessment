const { DataTypes } = require('sequelize');

const db = require('../config/db');

const Advertiser = db.define('advertiser', {
  title: DataTypes.STRING,
  structureLink: DataTypes.STRING,
  platform: DataTypes.STRING,
  api: DataTypes.STRING
})

Advertiser.associate = function (models) {
  Advertiser.hasMany(models.offer)
  Advertiser.hasMany(models.action)
}
  
module.exports = Advertiser