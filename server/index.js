const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const { connectToDatabase } = require('./database');

app.listen(8080, () => {
  connectToDatabase();
});
