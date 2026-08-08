const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.get("/", (req, res) => {
    res.send("CampusFlow Backend is running!");
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "Frontend and Backend are connected!"
    });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  })
  .catch((err) => {
    console.log(err);
  });