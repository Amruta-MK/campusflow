import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projects = {
    "campus-connect": {
      title: "Campus Connect",
      category: "WEB DEVELOPMENT",
      description:
        "Campus Connect is a platform designed to help students discover events, clubs, projects, and opportunities available on campus.",

      goal:
        "Create a connected digital campus experience where students can easily find opportunities and collaborate with others.",

      technologies: "React · Node.js · MongoDB",

      leader: "Amruta",

      members: [
        "Amruta",
        "Rahul",
        "Sneha",
      ],
    },

    "ai-health-assistant": {
      title: "AI Health Assistant",
      category: "ARTIFICIAL INTELLIGENCE",

      description:
        "An intelligent assistant that helps users understand health-related information using artificial intelligence.",

      goal:
        "Build an accessible AI-powered assistant that provides useful and understandable information to users.",

      technologies: "Python · Machine Learning · React",

      leader: "Priya",

      members: [
        "Priya",
        "Arjun",
      ],
    },

    "smart-campus": {
      title: "Smart Campus",
      category: "IOT & TECHNOLOGY",

      description:
        "A technology-based project focused on improving campus facilities and student experiences.",

      goal:
        "Use technology to create smarter and more efficient campus solutions.",

      technologies: "IoT · Python · Cloud",

      leader: "Kiran",

      members: [
        "Kiran",
        "Ananya",
        "Rohit",
      ],
    },

    "student-marketplace": {
      title: "Student Marketplace",
      category: "FULL STACK",

      description:
        "A platform where students can buy, sell, and exchange items within their campus community.",

      goal:
        "Create a safe and convenient marketplace exclusively for students.",

      technologies: "React · Express · MongoDB",

      leader: "Vikram",

      members: [
        "Vikram",
        "Megha",
        "Aman",
      ],
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-details-page">

        <h1>
          Project not found
        </h1>

        <button
          className="primary-button"
          onClick={() => navigate("/projects")}
        >
          ← Back to Projects
        </button>

      </div>
    );
  }

  return (
    <div className="project-details-page">

      <button
        className="back-button"
        onClick={() => navigate("/projects")}
      >
        ← Back to Projects
      </button>


      <main className="project-details-card">

        <span className="event-category">
          {project.category}
        </span>


        <h1>
          {project.title}
        </h1>


        <p className="project-details-description">
          {project.description}
        </p>


        <div className="project-details-grid">

          <div className="project-detail-box">

            <span>
              PROJECT GOAL
            </span>

            <p>
              {project.goal}
            </p>

          </div>


          <div className="project-detail-box">

            <span>
              TECHNOLOGIES
            </span>

            <p>
              {project.technologies}
            </p>

          </div>


          <div className="project-detail-box">

            <span>
              PROJECT LEADER
            </span>

            <p>
              {project.leader}
            </p>

          </div>

        </div>


        <div className="project-members-section">

          <h2>
            Project Members
          </h2>


          <div className="project-members-list">

            {project.members.map((member, index) => (

              <div
                className="project-member"
                key={index}
              >

                <div className="member-avatar">
                  {member.charAt(0)}
                </div>

                <div>
                  <strong>
                    {member}
                  </strong>

                  {member === project.leader && (
                    <span>
                      Project Leader
                    </span>
                  )}
                </div>

              </div>

            ))}

          </div>

        </div>


        <button
          className="join-project-button project-details-join"
          onClick={() =>
            navigate(`/join-project/${projectId}`)
          }
        >
          Request to Join Project →
        </button>

        <button
  className="manage-project-button"
  onClick={() =>
    navigate(`/manage-project/${projectId}`)
  }
>
  Manage Project →
</button>

      </main>

    </div>
  );
}

export default ProjectDetails;