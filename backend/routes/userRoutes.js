const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User
router.post("/create", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
