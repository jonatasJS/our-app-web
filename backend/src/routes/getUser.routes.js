const express = require("express");
const router = express.Router();
const User = require("../models/UserTotalItens");

const getUser = router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const createUser = router.post("/", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const newUser = await new User(await req.body).save();
    console.log("newUser", newUser);
    res.json(newUser);
    res.json({ status: "User created", newUser });
  }
  catch (error) {
    res.json({ status: "User not created", error });
  }
});

module.exports = getUser;
