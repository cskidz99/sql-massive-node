var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://localhost/sandbox";

var massiveInstance = massive.connectSync({connectionString : connectionString})

// var db = massive.connectSync({
//   connectionString : 'postgres://localhost/sandbox'
// });

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');
// app.set('db', db);
var controller = require('./controller.js');
var controller = require('./productsCtrl.js');


// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// db.get_planes(function(err, planes){
//     console.log(err, planes)
// })
// controller.getPlanes();
app.get('/api/products', controller.getAll);
app.get('/api/product/:productId', controller.getOne);
app.put('/api/product/:productId', controller.create);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
