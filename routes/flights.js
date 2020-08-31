var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js')

// GET /flights
router.get('/', flightsCtrl.index);
/* GET users listing. */
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
//POST /flights
router.post('/', flightsCtrl.create);

// post destinations need to add controller


module.exports = router;
