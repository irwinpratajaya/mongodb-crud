var express = require('express');
var router = express.Router();
var books = require('../controllers/books')

// console.log(books);
// console.log(books.getBooks);
router.get('/', books.getBooks)

router.post('/', books.addBooks)

router.delete('/:id', books.removeBooks)

router.put('/:id', books.updateBooks)

module.exports = router;
