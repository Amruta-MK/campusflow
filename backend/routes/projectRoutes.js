const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");


// CREATE PROJECT
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      goal,
      technologies,
      teamSize,
    } = req.body;

    const project = new Project({
      title,
      category,
      description,
      goal,
      technologies,
      teamSize,
      leader: req.user.id,
    });

    await project.save();

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// GET ALL PROJECTS
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


module.exports = router;