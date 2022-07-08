const { getActions, getImpressionSum, getConversionPerGeo, getCTR, createActions } = require('../handlers/action.handler');
const { getAdvertisers, createAdvertiser } = require('../handlers/advertiser.handler');
const { getOffers, createOffer, createPlacement, getPlacement } = require('../handlers/offer.handler');
const { getPublishers, createPublisher } = require('../handlers/publisher.handler');


const getHomeData = async (_req, res) => {
	const advertisers = await getAdvertisers()
	const offers = await getOffers()
	const actions = await getActions()
	const publishers = await getPublishers()
	const summariseOffers = await getImpressionSum()
	const conversionByGeos = await getConversionPerGeo()
	const ctr = await getCTR()

	res.render('pages/index', {
		actions,
		offers,
		advertisers,
		publishers,
		summariseOffers,
		conversionByGeos,
		ctr: ctr?.[0],
	})
}

const createInitialData = async (_req, res) => {
	await createPublisher()
	await createAdvertiser()
	await createOffer()
	await createActions()
	await createPlacement()
	res.redirect('/')
}

const getPlacementPage = async (req, res) => {
	const { placement_id } = req.query
	const placement = await getPlacement(placement_id)
	res.render('pages/placement', { placement })
}

module.exports = {
	getHomeData,
	createInitialData,
	getPlacementPage
}