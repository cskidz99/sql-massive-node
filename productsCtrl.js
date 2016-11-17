var app = require('./index');
var db = app.get('db');

  module.exports = {
    create: function(req,res,next){
      var product = req.body;
      db.create_product([product.name, product.description, product.price, product.img_url],function(err, products){
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
    update: function(req,res,next){
      if (req.query.desc){
      db.update_product([req.params.productId,req.query.desc],function(err, products){
        if (err){
          res.status(500).send(err);
        }
        else {
          res.send(products);
        }
      })
      }
      else {
        db.read_product([req.params.productId],function(err, products){
          if (err){
            res.status(500).send(err);
          }
          else {
            res.send(products);
          }
        })
      }
    },
    delete: function(req,res,next){
      db.delete_product([req.params.productId],function(err, products){
        console.log(err, products);
        res.send(products);
      })
    },

  }
