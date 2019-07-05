var express = require('express');
var router = express.Router();

let home = require('../route_handlers/landing');

/* GET home page. */
router.get('/', home.homepage);
// router.post('/', landing.submit_lead);

module.exports = router;
