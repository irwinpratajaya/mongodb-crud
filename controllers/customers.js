var customer = require('../models/customer')

var customers = {}

customers.getCustomers = function(req,res,next) {
  customer.find().then(function(datacust) {
    // res.render('customer',{title: "Customer", custData: datacust})
    res.send(datacust)
  })
}

customers.addCustomers = function(req,res,next){
  customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

customers.removeCustomers = function (req,res,next) {
  customer.find({_id: req.params.id}).remove(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

customers.updateCustomers = function (req,res,next) {
  customer.update({
    _id: req.params.id
  }, {
    $set: req.body
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

module.exports = customers
