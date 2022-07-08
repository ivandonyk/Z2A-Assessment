const { DataTypes } = require('sequelize');

const db = require('../config/db');

const Publisher = db.define('publisher', {
  title: DataTypes.STRING,
  postbackLink: DataTypes.STRING,
  user: DataTypes.STRING,
  password: DataTypes.STRING
})

Publisher.associate = function (models) {
  Publisher.hasMany(models.action)
  Publisher.hasMany(models.connecting)
}

module.exports = Publisher