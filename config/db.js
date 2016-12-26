// // database
// var mongoose	 = require('mongoose');
// // var url = 'mongodb://localhost:27017/testas';
// mongoose.connect('mongodb://localhost:27017/testas');

// // var db = mongoose.connection;
// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function() {
// //  	console.log("connect through oongoose");
// // 	 var kittySchema = mongoose.Schema({
// // 	    name: String
// // 	});
// var kittySchema = mongoose.Schema({
// 	    name: String
// 	});
// module.exports = mongoose.model('Kittens', kittySchema);
// // 	var Kitten = mongoose.model('Kitten', kittySchema);
// // 	var silence = new Kitten({ name: 'Silence' });
// // 	console.log(silence.name); // 'Silence'
// // });



// // exports.findById = function(req, res) {
// //     res.send({id:req.params.id, name: "The Name", description: "description"});
// // };





// var mongo = require('mongodb');

// // var Server = mongo.Server,
// //     Db = mongo.Db,
// //     BSON = mongo.BSONPure;
// // var server = new Server('ds141428.mlab.com', 41428, {auto_reconnect: true});
// // // var server = new Server('localhost', 27017, {auto_reconnect: true});
// // db = new Db('fyp_project', server);

// // db.open(function(err, db) {
// //     if (err) throw err;
// //     if(!err) {
// //         console.log(db);
// //         db.collection('register', {strict:true}, function(err, collection) {
// //             if (err) throw err;
// //             if (err) {
// //                 console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
// //                 // populateDB();
// //             }
// //         });
// //     }
// // });



// var MongoClient = require('mongodb').MongoClient;
// var Server = require('mongodb').Server;
//   // , assert = require('assert');
// // var db=null;
// // Connection URL
// var url = 'mongodb://hello:hello@ds141428.mlab.com:41428/fyp_project';
// var mongoclient = new MongoClient(new Server("ds141428.mlab.com", 41428), {native_parser: true});
// // Use connect method to connect to the server
// // mongoclient.open(url, function(err, mongoclient) {


// mongoclient.open(function(err, mongoclient) {
//     if (err) {throw err}else{console.log("hello")};






//     if(!err) {
//         console.log(mongoclient);
//         var db = mongoclient.db("fyp_project");
//         db.collection('register', {strict:true}, function(err, collection) {
//             if (err) throw err;
//             if (!err) {
//                 console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
//                 // populateDB();
//             }
//         });
//     }


// // var server = new Server('ds141428.mlab.com', 41428, {auto_reconnect: true});
// // var Db = mongo.Db;

// // dbs = new Db('fyp_project', server);
//   // assert.equal(null, err);
//   // db = new Db('fyp_project', server);
//   exports.db= db;
//   // db.close();
// //   console.log(exports.db);
// console.log("=======================================");
//   // console.log(dbs);
// });








// var MongoClient = require('mongodb').MongoClient
//   , Server = require('mongodb').Server;

// var mongoClient = new MongoClient(new Server('ds141428.mlab.com', 41428));
// mongoClient.open(function(err, mongoClient) {

//     if(!err) {
        
// //         var db = mongoclient.db("fyp_project");
//   var db = mongoClient.db("fyp_project");
//   console.log(db);
// }
// // exports.db =db;
//   // mongoClient.close();
// });