const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DB_URL;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectToDatabase = async () => {
  try {
    await client.connect();

    const database = client.db('emizahs');
    const collection = database.collection('quotes');
    const cursor = collection.find();
    const dataArr = await cursor.sort();
    console.log(dataArr);
  } catch (err) {
    console.log(err);
  }

  // await client.connect((err) => {
  //   const collection = client.db('emizahs').collection('quotes');
  //   console.log(collection.find());
  // });
};

module.exports = { connectToDatabase };
