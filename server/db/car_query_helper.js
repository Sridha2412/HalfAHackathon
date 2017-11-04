var MongoClient = require('mongodb').MongoClient;

var carsQueryHelper = {
  url: 'mongodb://localhost:27017/cars_information',
  all: function (onQueryFinished) {

    MongoClient.connect( this.url, function ( err, db ) {

      var carsCollection = db.collection('cars');

       carsCollection.find().toArray( function ( err, docs ) {

        onQueryFinished(docs);
      });
    })

  }
}
  module.exports = carsQueryHelper;
