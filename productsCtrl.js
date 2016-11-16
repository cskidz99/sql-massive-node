var app = require('./index');
var db = app.get('db');

  module.exports = {
    create: function(){
      db.create_product([req.params.productId],function(err, products){
        console.log(err, products);
        res.send(products);
      })
    },
    getAll: function(req,res,next){
      db.read_products(function(err, products){
        console.log(err, products);
        res.send(products);
      })
    },
    getOne: function(req,res,next){
      // console.log(req.params.productId);
      db.read_product([req.params.productId],function(err, products){
        console.log(err, products);
        res.send(products);
      })
    },
    update: function(){

    },
    delete: function(){

    },

  }
