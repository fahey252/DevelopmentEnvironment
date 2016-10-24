// from: http://mongodb.github.io/node-mongodb-native/2.2/quick-start/
// Use MongoDB Compass or MongoClient to see documents

var MongoClient = require('mongodb').MongoClient,
	databaseName = 'myproject',
	collectionName = 'documents',
	mongoConnectionString = 'mongodb://localhost:27017/' + databaseName;

MongoClient.connect(mongoConnectionString, function (err, db) {
	console.log("Connected successfully to Mongo server.");
	insertDocuments(db, function () {
		db.close();
	});
});

var insertDocuments = function (db, callback) {
	var collection = db.collection(collectionName);
	// Insert some documents
	collection.insertMany([
		{ a: 1 }, { a: 2 }, { a: 3 }
	], function (err, result) {
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
}
