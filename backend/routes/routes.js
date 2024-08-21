const express = require("express");
const router = express.Router();
const users = require("../models/users");
const bcrypt = require("bcrypt");
router.post("/createuser", async (req, res) => {
  const isUserPresent = await users.findOne({ email: req.body.email });
  console.log(isUserPresent);

  if (isUserPresent !== null) {
    return res.json({ status: false, message: "User is already present" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const creatingUser = await users.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    return res.json({
      status: true,
      message: "User created successfully",
    });
  }
});

module.exports = router;
