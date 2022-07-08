const { Router } = require('express');

const { getHomeData, createInitialData, getPlacementPage } = require('../controllers');

const router = Router()

router.get('/', getHomeData)
router.get('/create', createInitialData)
router.get('/click', getPlacementPage)

module.exports = router;
