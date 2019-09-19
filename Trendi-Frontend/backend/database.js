const db = require("mongoose");

db.connect("mongodb://Mongobalancer-49f3968e4628f967.elb.us-east-1.amazonaws.com:27017/trendi",{useNewUrlParser:true})
    .then(database =>  console.log("db conected"))
    .catch(err =>  console.log(err) );

module.exports = db;