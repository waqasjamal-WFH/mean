exports.register = function(req, res) {
	var data = req.body;

    var MongoClient = require('mongodb').MongoClient
      , Server = require('mongodb').Server;

    var mongoClient = new MongoClient(new Server('ds141428.mlab.com', 41428));
    mongoClient.open(function(err, mongoClient) {

        if(!err) {
            
            var db = mongoClient.db("fyp_project");
            db.authenticate('hello', 'hello', function(err, result) {
                db.collection('register', function(err, collection) {   
                    collection.insert(data, {safe:true}, function(err, result) {
                        if (err) {
                            res.send({err});
                        } else {
                            console.log('Success: ' + '1');
                            res.send('1');
                        }
                    });
                });  
            });
        }
    });
    
};

exports.register_parient = function(req, res ) {
    var data = req.body;
    // res.send('Adding wine: ' + data.username);
    // res.end();
    var MongoClient = require('mongodb').MongoClient
      , Server = require('mongodb').Server;

    var mongoClient = new MongoClient(new Server('ds141428.mlab.com', 41428));
    mongoClient.open(function(err, mongoClient) {

        if(!err) {
            
            var db = mongoClient.db("fyp_project");
            db.authenticate('hello', 'hello', function(err, result) {
                // On authorized result=true
                // Not authorized result=false
                db.collection('register_patient', function(err, collection) {
                    collection.insert(data, {safe:true}, function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log('Success: ' + '1');
                            res.send('1');
                        }
                    });
                });
            });
        }
    });
};

exports.login = function(req, res) {
	var data = req.body;
    var MongoClient = require('mongodb').MongoClient
      , Server = require('mongodb').Server;

    var mongoClient = new MongoClient(new Server('ds141428.mlab.com', 41428));
    mongoClient.open(function(err, mongoClient) {

        if(!err) {
            
            var db = mongoClient.db("fyp_project");
            db.authenticate('hello', 'hello', function(err, result) {
                    db.collection('register', function(err, collection) {
                        collection.findOne({'email': data.email , 'pass' : data.pass}, function(err, result) {
                            if (result) {
                                 res.send(result);
                                 res.end();
                            } else {
                                  res.send("0");
                                  res.end();
                            }
                        });
                    });
                
            });
        }
    });    
};

exports.login_patient = function(req, res) {
    var data = req.body;
    var MongoClient = require('mongodb').MongoClient
      , Server = require('mongodb').Server;

    var mongoClient = new MongoClient(new Server('ds141428.mlab.com', 41428));
    mongoClient.open(function(err, mongoClient) {

        if(!err) {
            
            var db = mongoClient.db("fyp_project");
            db.authenticate('hello', 'hello', function(err, result) {
                db.collection('register_patient', function(err, collection) {
                    collection.findOne({'email': data.email , 'pass' : data.pass}, function(err, result) {
                        if (result) {
                             res.send(result);
                             res.end();
                        } else {
                              res.send("0");
                              res.end();
                        }
                    });
                });   
            });
        }
    });    
};