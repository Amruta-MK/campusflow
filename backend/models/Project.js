const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    goal: {
      type: String,
      required: true,
    },

    technologies: {
      type: String,
      required: true,
    },

    teamSize: {
      type: Number,
      required: true,
    },

    // Project creator
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Approved members
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Join applications
    joinRequests: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        linkedin: {
          type: String,
          default: "",
        },

        github: {
          type: String,
          default: "",
        },

        message: {
          type: String,
          default: "",
        },

        status: {
          type: String,
          enum: ["pending", "approved", "rejected"],
          default: "pending",
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);