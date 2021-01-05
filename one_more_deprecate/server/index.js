const express = require("express");
const dotenv = require("dotenv");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const AccountRoutes = require("./routes/account.routes");
const QuoteRoutes = require("./routes/quotes.routes");

dotenv.config();
const app = express();

const whitelist = [
  "http://localhost:8100",
  "http://localhost:3000",
  "http://192.168.4.56:8100",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const { DB_URL, DB_NAME } = process.env;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Mongoose.Promise = global.Promise;
Mongoose.connect(`${DB_URL}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successful connection to db"))
  .catch((err) => {
    console.log("Could not connect to db...", err);
    process.exit();
  });

app.listen(process.env.PORT || 8080, async () => {
  AccountRoutes(app);
  QuoteRoutes(app);
});
