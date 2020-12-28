const mongoose = require("mongoose");

const ContentModel = mongoose.Schema(
  {
    phrase: String,
    toUser: String,
  },
  { collection: "content" }
);
module.exports = mongoose.model("Content", ContentModel);
