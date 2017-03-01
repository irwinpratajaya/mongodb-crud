const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    isbn: String,
    qty: Number
  }]
})

var transaction = mongoose.model('transaction', transactionSchema );

module.exports = transaction
