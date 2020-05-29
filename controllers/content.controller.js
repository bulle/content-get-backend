var MongoClient = require('mongodb').MongoClient

// Connection URL
var url = 'mongodb://localhost:27017';

var db;

var physicalContainers;

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');

    db = client.db('fridges');
    physicalContainers = db.collection('physical');
  });

exports.findFridges = (req, res) => {
  console.log("Finding fridges");
  physicalContainers.find().toArray(function(err, results) {
    if (err) throw err;
    console.log(results);
    res.status(200).json(results);
  });
};

exports.findSpecificFridge = (req, res) => {
  console.log("Specific Fridge");
  res.status(200);
};

exports.findFridgeOwners = (req, res) => {
  console.log("Fridges that owners have");
  res.status(200);
};

exports.createFridgeEntry = (req, res) => {
  console.log("Generating fridge entry");
  console.log(req.body);

  physicalContainers.insertOne(req.body, function(err, results) {
    if (err) throw err;
    console.log("Fridge entry made");
    res.status(200).json(results);
  });
};

exports.createFridgeEntries = (req, res) => {
  console.log("Generating fridge entries");
  console.log(req.body);

  physicalContainers.insertMany(req.body, function(err, results) {
    if (err) throw err;
    console.log("Fridge entries made of " + results.insertedCount);
    res.status(200).json(results);
  });
};

exports.deleteFridgeEntries = (req, res) => {
  physicalContainers.drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
  });
};

exports.deleteAndCreate = (req, res) => {
  console.log("Delete and create test data");

  // Delete data
  this.deleteFridgeEntries(req,res);

  // Create results
  this.createFridgeEntries(req,res);
};




// Work in progress after utility
exports.getExpirySortedList = (req, res) => {
  console.log("Finding fridges");
  physicalContainers.find().sort({"expiry_date": 1}).toArray(function(err, results) {
    if (err) throw err;
    console.log(results);
    res.status(200).json(results);
  });
};

exports.getDaysLeft = (req, res) => {
  this.getExpirySortedList(req, res);
  console.log("Getting list");

}