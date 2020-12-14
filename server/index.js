const express = require('express');
const dotenv = require('dotenv');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthRoutes = require('./routes/auth.routes');
const QuotesRoutes = require('./routes/quotes.routes');

dotenv.config();
const app = express();

const { DB_URL, DB_NAME } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Mongoose.Promise = global.Promise;
Mongoose.connect(`${DB_URL}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Successful connection to db'))
  .catch((err) => {
    console.log('Could not connect to db...', err);
    process.exit();
  });

app.listen(process.env.PORT || 8080, async () => {
  AuthRoutes(app);
  QuotesRoutes(app);
});
