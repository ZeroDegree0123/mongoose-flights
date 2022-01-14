var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')



// GET /flights/new
router.get('/new', flightsCtrl.newFlight);

// POST /flights
router.post('/', flightsCtrl.create);

// GET /flights
router.get('/', flightsCtrl.index);



module.exports = router;
