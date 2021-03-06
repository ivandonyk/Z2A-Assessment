const sequelize = require('sequelize');

const Offer = require('../models/offer')
const Connecting = require('../models/connecting')

const createOffer = async () => {
  const dummyOffer = {
    title: 'Offer title',
    link: 'https://google.com/search?q=link',
    payout: 2,
    kpi: 1,
    description: 'text',
    currency: 10
  }

  await Offer.create({ ...dummyOffer, advertiserId: 1 })
  await Offer.create({ ...dummyOffer, advertiserId: 2 })
}

const createPlacement = async () => await Connecting.create({ offerId: 1, publisherId: 1 })
const getPlacement = async (id) => await Connecting.findOne({
  where: { id },
})


const getOffers = async () => await Offer.findAll()

module.exports = {
  createOffer,
  getOffers,
  createPlacement,
  getPlacement
}