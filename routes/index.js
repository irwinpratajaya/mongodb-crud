var express = require('express');
var router = express.Router();
// var customer = require('../models/customer')
// var book = require('../models/book')
// var transaction = require('../models/transaction')

/* GET home page. */

/* create customer */
// router.get('/customer', function(req, res, next) {
//   customer.create({
//     name: 'Irwin',
//     memberid: 'lib001',
//     address: 'bintaro',
//     zipcode: '15222',
//     phone: '08123123123'
//   }).then(function(data) {
//     res.send(data)
//   })
// });

// router.get('/customer', function(req, res, next) {
//   customer.create({
//     name: 'Endy',
//     memberid: 'lib002',
//     address: 'BSD',
//     zipcode: '15123',
//     phone: '08123455675'
//   }).then(function(data) {
//     res.send(data)
//   })
// });

/* create book */
// router.get('/book', function(req, res, next) {
//   book.create({
//     isbn: "978-1-60309-057-5",
//     title: "Dragon Puncher",
//     author: "James Kochalka",
//     category: "All Ages",
//     stock: 3
//   }).then(function(data) {
//     res.send(data)
//   })
// });

// router.get('/book', function(req, res, next) {
//   book.create({
//     isbn: "978-1-891830-77-8",
//     title: "Every Girl is the End of the World for Me",
//     author: "Jeffrey Brown",
//     category: "Mature (16+)",
//     stock: 5
//   }).then(function(data) {
//     res.send(data)
//   })
// });

// router.get('/', function(req,res,next) {
//   customer.find().then(function(datacust) {
//     book.find().then(function(databook) {
//       // res.send({title: "Library",custData: datacust, bookData: databook})
//       res.render('index',{title: "Library",custData: datacust, bookData: databook})
//     })
//   })
// })


module.exports = router;
