require('dotenv').config()
const express = require('express')
const redis = require("redis");

const db = require('./config/db');
const { getActions, getImpressionSum, getConversionPerGeo, getCTR } = require('./controllers/action.controller');
const { getAdvertisers } = require('./controllers/advertiser.controller');
const { getOffers } = require('./controllers/offer.controller');
const { getPublishers } = require('./controllers/publisher.controller');

const app = express()
const port = 3000
app.set('view engine', 'ejs');
const redisPort = 6379
const client = redis.createClient(redisPort);

client.on("error", (err) => {
	console.log(err);
});

app.get('/', async (_req, res) => {
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
		ctr: ctr?.[0]
	})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
	db.authenticate()
	  .then(() => console.log('Connection has been established successfully.'))
	  .catch(error => console.error('Unable to connect to the database:', error))
})