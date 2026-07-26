const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    console.log("Signup data received:");
    console.log(name, email, password);

    res.json({
        message: "Signup successful!",
        user: {
            name,
            email
        }
    });
});

module.exports = router;