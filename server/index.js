var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/events';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.post('/storedata', function(request, response) {
        if ( request.body.username != undefined && request.body.time != undefined && request.body.endtime != undefined && request.body.summary != undefined && request.body.location != undefined) {
                username = request.body.username;
                time = request.body.time;
                endtime = request.body.endtime;
                summary = request.body.summary;
                location = request.body.location;
                var toInsert = {
                        "username" : username,
                        "time": time,
                        "endtime": endtime,
                        "summary": summary,
                        "location": location
                };
                db.collection('eventdata', function(error, coll){
                                if (error){
                                        console.log("Error: " + error);
                                        response.send(500);
                                } else {
                                        coll.insert(toInsert);
                                }
                });
                response.send("Inserted your data into the database");
        }
});

app.listen(process.env.PORT || 8080);
