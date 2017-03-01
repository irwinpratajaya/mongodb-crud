var customer = require('../models/customer')

var customers = {}

customers.getCustomers = function(req,res,next) {
  customer.find().then(function(datacust) {
    res.render('customer',{title: "Customer", custData: datacust})
  })
}

module.exports = customers
