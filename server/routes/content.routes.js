const content = require("../controllers/content.controllers.js");

module.exports = (app) => {
  app.post("/api/content", content.createContent);
  app.get("/api/content/:user", content.readContent);
  app.post("/api/content/error", content.contentError);
};
