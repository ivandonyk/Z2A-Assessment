const sequelize = require('sequelize');

const db = require('../config/db');

const { DataTypes } = sequelize

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

Action.sumAndGroup = function(groupBy, sumOf) {
  return this.findAll({
    raw: true,
    attributes: [
      groupBy,
      [sequelize.fn('sum', sequelize.col(sumOf)), sumOf],
    ],
    group: [groupBy],
  });
}

Action.calculateCTR = function(){
  return this.findAll({ 
    raw: true,
    attributes: [
      [sequelize.fn('sum', sequelize.col('impression')), 'impressionTotal'],
      [sequelize.fn('sum', sequelize.col('click')), 'clickTotal'],
    ],
  })
}

module.exports = Action