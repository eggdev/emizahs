const contentRoutes = require("routes/content.routes");
const Content = require("../models/content.models");

// app.post("/api/content", content.createContent);
// app.get("/api/content/:user", content.readContent);
// app.post("/api/content/error", content.contentError);

exports.createContent = async (req, res) => {
  const { data } = req.body;
  Content.create(
    {
      ...data,
    },
    (err, newContent) => {
      if (err) return res.json({ error: err });
      return res.json({ content: { ...newContent } });
    }
  );
};

exports.readContent = async (req, res) => {};

exports.contentError = async (req, res) => {
  console.log("contentError", req.body);
  return res.json({ val: "error" });
};
