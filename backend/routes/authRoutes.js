const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
const hashedPassword = await bcrypt.hash(password, 10);

const user = new User({
  name,
  email,
  password: hashedPassword,
});

await user.save();

    res.status(201).json({
      message: "Signup successful!",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Check password
 const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid password",
  });
}

    res.status(200).json({
      message: "Login successful!",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});
module.exports = router;
