var mongoose = require('mongoose');

var dbPath = "mongodb://localhost/eKartShopDb";
mongoose.connect(dbPath);
mongoose.connection.once('open',function(){
  console.log("Connected to Database  Successfully.");
});