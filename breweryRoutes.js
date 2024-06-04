const express = require('express');
const { searchBreweries, getBreweryDetails } = require('../controllers/breweryController');
const router = express.Router();

router.get('/search', searchBreweries);
router.get('/:id', getBreweryDetails);

module.exports = router;
