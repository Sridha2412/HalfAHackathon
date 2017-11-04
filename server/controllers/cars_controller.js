var carQueryHelper = require('../db/car_query_helper.js');
var express = require('express');
var carsRouter = express.Router()

carsRouter.get('/', function (req, res) {

  carQueryHelper.all( function( cars ) {

    res.json(cars)
  })
})

module.exports = carsRouter;
