const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

var customer = mongoose.model('customer', customerSchema );

module.exports = customer
