var book = require('../models/book')

var books = {}

books.getBooks = function(req,res,next) {
  book.find().then(function(databook) {
    // res.render('book/book',{title: "Book", bookData: databook})
    res.send(databook)
  })
}

books.addBooks = function(req,res,next){
  book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }).then(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

books.removeBooks = function (req,res,next) {
  book.find({_id: req.params.id}).remove(function(err,data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

books.updateBooks = function (req,res,next) {
  book.update({
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




module.exports = books
