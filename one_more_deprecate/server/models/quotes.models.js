const mongoose = require("mongoose");

const QuotesModel = mongoose.Schema(
  {
    phrase: String,
    user: String,
  },
  { collection: "quotes" }
);
module.exports = mongoose.model("quotes", QuotesModel);
