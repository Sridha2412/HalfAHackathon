var express = require('express')
var app = express();


var carsRouter = require('./controllers/cars_controller.js')

app.use('/api/cars', carsRouter)


app.listen(3000, function () {
  // console.log('app running');
})
