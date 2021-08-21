// Imports
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes')
const cors = require('cors')

// Create Express Instance/App
const app = express()

// Configure Mongoose to supress deprecation warning
mongoose.set('returnOriginal', false)
mongoose.set('useFindAndModify', false)

app.listen(3000)

// Not exactly sure what all these do, but using them for now
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/books', bookRoutes)