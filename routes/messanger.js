// coded by omerakgoz34 :)

const express = require('express')
const router = express.Router()
const createError = require('http-errors')

router.get('/', function (req, res, next) {
  res.render('messanger')
})

// Catch 404
router.use(function (req, res, next) {
  next(createError(404))
})

module.exports = router
