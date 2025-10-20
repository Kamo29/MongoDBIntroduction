const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/MyDB';

//Creating a table
mongoClient.connect(url, function(err, db) 
{
    if(err) throw err;
    let dbo = db.db("CustomersDB");
    dbo.createCollection("Customers", function(err, res) 
    {
        if (err) throw err;
        console.log("Collection created!"); 
        db.close();
    });
})

//Inserting a document
mongoClient.connect(url,function(err, db) 
{
    if(err) throw err;
    let dbo = db.db("MyDB");
    var myobj = { name: "Company Inc", address: "Highway 37"};
    dbo.collection("Customers").insertOne(myobj, function(err, res) 
    {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
})

//Inserting many document
mongoClient.connect(url,function(err, db) 
{
    if(err) throw err;
    let dbo = db.db("MyDB");
    var myobj = [
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple St 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean Blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky St 331'},
    { name: 'Susan', address: 'One Way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central St 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}];

    dbo.collection("Customers").insertMany(myobj, function(err, res)
    {
        if (err) throw err;
        console.log("Documents inserted: " + res.InsertedCount);
        db.close();
    });
})
