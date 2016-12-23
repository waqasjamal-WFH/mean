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
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('ds141428.mlab.com', 41428, {auto_reconnect: true});
db = new Db('fyp_project', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'mydb' database");
        db.collection('register', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                // populateDB();
            }
        });
    }
});