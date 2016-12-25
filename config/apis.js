exports.register = function(req, res) {
	var data = req.body;
    // res.send('Adding wine: ' + data.username);
    // res.end();
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
};

exports.register_parient = function(req, res) {
    var data = req.body;
    // res.send('Adding wine: ' + data.username);
    // res.end();
    db.collection('register_patient', function(err, collection) {
        collection.insert(data, {safe:true}, function(err, result) {
            if (err) {
                res.send({err});
            } else {
                console.log('Success: ' + '1');
                res.send('1');
            }
        });
    });
};

exports.login = function(req, res) {
	var data = req.body;
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
};

exports.login_patient = function(req, res) {
    var data = req.body;
    
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
};