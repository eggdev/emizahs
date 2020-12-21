const Account = require("../models/account.models");

exports.validate = async (req, res) => {
  return res.json({ val: "here" });
};

exports.createUser = async (req, res) => {
  const { data } = req.body;
  Account.findOne({ user: data.user }, (error, account) => {
    if (error) return res.json({ error: error });
    if (account) return res.json({ error: "User already exists", account });
    Account.create(
      {
        ...data,
      },
      (err, newAccount) => {
        if (err) return res.json({ error: err });
        return res.json({ account: { ...newAccount } });
      }
    );
  });
};

exports.authError = async (req, res) => {
  console.log("authError", req.body);
  return res.json({ val: "error" });
};
