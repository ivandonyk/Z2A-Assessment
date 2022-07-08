const Action = require('../models/action')

const createActions = async () => {

  for (let i = 0; i < 20; i++) {
    const dummyAction = {
      publisherId: 1,
      offerId: i < 10 ? 2 : 4,
      advertiserId: i < 10 ? 1 : 2,
      geo: 'US',
      impression: 1,
      click: i % 4 === 0 ? 1 : 0,
      conversion: i % 10 === 0 ? 1 : 0
    }

    await Action.create({ ...dummyAction, advertiserId: 1 })
  }
}

const getImpressionSum = async () => await Action.sumAndGroup('offerId', 'impression')

const getConversionPerGeo = async () => await Action.sumAndGroup('geo', 'conversion')

const getCTR = async () => await Action.calculateCTR()

const getActions = async () => await Action.findAll({ raw: true })

module.exports = {
  createActions,
  getActions,
  getImpressionSum,
  getConversionPerGeo,
  getCTR
}