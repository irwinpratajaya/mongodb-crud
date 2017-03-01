var express = require('express');
var router = express.Router();
var customers = require('../controllers/customers')

router.get('/', customers.getCustomers)

router.post('/', customers.addCustomers)

router.delete('/:id', customers.removeCustomers)

router.put('/:id', customers.updateCustomers)


module.exports = router;
