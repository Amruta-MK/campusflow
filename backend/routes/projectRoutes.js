const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");


// =====================================================
// CREATE PROJECT
// =====================================================

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

      members: [],

      joinRequests: [],
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


// =====================================================
// GET ALL PROJECTS
// =====================================================

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("leader", "name email");

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =====================================================
// GET MY PROJECTS
// =====================================================

router.get("/my-projects", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({
      leader: req.user.id,
    }).populate("leader", "name email");

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =====================================================
// SEND JOIN REQUEST
// =====================================================

router.post("/:id/join", authMiddleware, async (req, res) => {
  try {

    const {
      linkedin,
      github,
      message,
    } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }


    // =================================================
    // CREATOR CANNOT JOIN OWN PROJECT
    // =================================================

    if (project.leader.toString() === req.user.id) {
      return res.status(400).json({
        message: "You are already the project leader",
      });
    }


    // =================================================
    // CHECK MEMBER
    // =================================================

    const alreadyMember = project.members.some(
      (memberId) =>
        memberId.toString() === req.user.id
    );

    if (alreadyMember) {
      return res.status(400).json({
        message: "You are already a member of this project",
      });
    }


    // =================================================
    // CHECK PREVIOUS REQUEST
    // =================================================

    const alreadyRequested = project.joinRequests.some(
      (request) =>
        request.user.toString() === req.user.id
    );

    if (alreadyRequested) {
      return res.status(400).json({
        message: "You have already sent a request for this project",
      });
    }


    // =================================================
    // CREATE REQUEST
    // =================================================

    project.joinRequests.push({
      user: req.user.id,

      linkedin: linkedin || "",

      github: github || "",

      message: message || "",

      status: "pending",
    });

    await project.save();


    res.status(201).json({
      message: "Join request sent successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =====================================================
// GET JOIN REQUESTS
// ONLY LEADER
// =====================================================

router.get("/:id/requests", authMiddleware, async (req, res) => {
  try {

    const project = await Project.findById(req.params.id)
      .populate("joinRequests.user", "name email");

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }


    // Only creator can see requests
    if (project.leader.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Only the project leader can view join requests",
      });
    }


    // Show only pending requests
    const pendingRequests =
      project.joinRequests.filter(
        (request) =>
          request.status === "pending"
      );


    res.status(200).json(pendingRequests);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// =====================================================
// APPROVE JOIN REQUEST
// =====================================================

router.put(
  "/:id/requests/:userId/approve",
  authMiddleware,
  async (req, res) => {

    try {

      const project =
        await Project.findById(req.params.id);

      if (!project) {
        return res.status(404).json({
          message: "Project not found",
        });
      }


      // Only leader can approve
      if (
        project.leader.toString() !==
        req.user.id
      ) {
        return res.status(403).json({
          message:
            "Only the project leader can approve requests",
        });
      }


      const userId = req.params.userId;


      const request =
        project.joinRequests.find(
          (request) =>
            request.user.toString() === userId &&
            request.status === "pending"
        );


      if (!request) {
        return res.status(404).json({
          message: "Join request not found",
        });
      }


      // Add member
      const alreadyMember =
        project.members.some(
          (memberId) =>
            memberId.toString() === userId
        );


      if (!alreadyMember) {
        project.members.push(userId);
      }


      // Change request status
      request.status = "approved";


      await project.save();


      res.status(200).json({
        message: "Student approved successfully",
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// =====================================================
// REJECT JOIN REQUEST
// =====================================================

router.delete(
  "/:id/requests/:userId",
  authMiddleware,
  async (req, res) => {

    try {

      const project =
        await Project.findById(req.params.id);

      if (!project) {
        return res.status(404).json({
          message: "Project not found",
        });
      }


      // Only leader can reject
      if (
        project.leader.toString() !==
        req.user.id
      ) {
        return res.status(403).json({
          message:
            "Only the project leader can reject requests",
        });
      }


      const userId = req.params.userId;


      const request =
        project.joinRequests.find(
          (request) =>
            request.user.toString() === userId &&
            request.status === "pending"
        );


      if (!request) {
        return res.status(404).json({
          message: "Join request not found",
        });
      }


      // Change status instead of deleting
      request.status = "rejected";


      await project.save();


      res.status(200).json({
        message: "Join request rejected",
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);


// =====================================================
// GET ONE PROJECT
// =====================================================

router.get("/:id", async (req, res) => {
  try {

    const project =
      await Project.findById(req.params.id)
        .populate("leader", "name email")
        .populate("members", "name email")
        .populate("joinRequests.user", "name email");

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }


    res.status(200).json(project);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


module.exports = router;