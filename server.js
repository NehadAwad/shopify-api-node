const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nehad:imbest007@cluster0.vs9yyxw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
   
  }
}
run().catch(console.dir);



// const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb://localhost:27017/test';
// const client = new MongoClient(uri);

// try {
//   client.connect((err, db) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected to MongoDB');
//   }
// });
// } catch (error) {
//   console.log(error)
// }

// const { MongoClient } = require("mongodb");

// const username = encodeURIComponent("nehad");
// const password = encodeURIComponent("imbest007");
// const cluster = "cluster0.vs9yyxw.mongodb.net";
// const authSource = "test";
// const authMechanism = "SCRAM";

// let uri =
//   `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("<dbName>");
//     const ratings = database.collection("<collName>");

//     const cursor = ratings.find();

//     console.log('osdfi')
//     await cursor.forEach(doc => console.dir(doc));
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);



