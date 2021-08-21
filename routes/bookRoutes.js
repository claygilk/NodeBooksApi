// Require Statements
const express = require('express')
const bookController = require('../controllers/bookController')

// Create Router
const router = express.Router()

// Router Paths
router.get('/', bookController.search_books)

module.exports = router;