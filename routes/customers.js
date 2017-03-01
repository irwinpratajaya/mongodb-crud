var express = require('express');
var router = express.Router();
var customers = require('../controllers/customers')

router.get('/', customers.getCustomers)



module.exports = router;
