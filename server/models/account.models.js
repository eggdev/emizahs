const mongoose = require("mongoose");

const AccountModel = mongoose.Schema(
  {
    email: String,
    authorizationCode: String,
    state: String,
    identityToken: String,
    fullName: {
      nickname: String,
      phoneticRepresentation: Object,
      middleName: String,
      familyName: String,
      namePrefix: String,
      givenName: String,
      nameSuffix: String,
    },
    user: String,
  },
  { collection: "account" }
);
module.exports = mongoose.model("Account", AccountModel);
