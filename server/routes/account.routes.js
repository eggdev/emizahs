const account = require("../controllers/account.controllers.js");

module.exports = (app) => {
  app.get("/api/account/:user", account.validate);
  app.post("/api/account/create", account.createUser);
  app.post("/api/account/error", account.authError);
};
