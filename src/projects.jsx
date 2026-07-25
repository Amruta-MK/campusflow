import { useNavigate } from "react-router-dom";
import "./App.css";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "campus-connect",
      title: "Campus Connect",
      category: "WEB DEVELOPMENT",
      description:
        "Build a platform that helps students connect, collaborate, and discover opportunities.",
      members: "4 members",
    },

    {
      id: "ai-health-assistant",
      title: "AI Health Assistant",
      category: "ARTIFICIAL INTELLIGENCE",
      description:
        "Create an intelligent assistant that helps users understand their health information.",
      members: "3 members",
    },

    {
      id: "smart-campus",
      title: "Smart Campus",
      category: "IOT & TECHNOLOGY",
      description:
        "Develop technology-based solutions to improve the campus experience.",
      members: "5 members",
    },

    {
      id: "student-marketplace",
      title: "Student Marketplace",
      category: "FULL STACK",
      description:
        "Create a platform where students can buy, sell, and exchange items.",
      members: "6 members",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className="dashboard-sidebar">

        <div className="logo">
          <span className="logo-mark">✦</span>
          CampusFlow
        </div>


        <nav className="dashboard-nav">

          <button
            className="dashboard-nav-item"
            onClick={() => navigate("/dashboard")}
          >
            ⌂ Dashboard
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() => navigate("/events")}
          >
            ◈ Events
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() => navigate("/clubs")}
          >
            ♧ Clubs
          </button>


          <button className="dashboard-nav-item active">
            ▣ Projects
          </button>

        </nav>


        <button
          className="logout-button"
          onClick={() => navigate("/")}
        >
          ← Log out
        </button>

      </aside>


      {/* MAIN CONTENT */}

      <main className="dashboard-main-page">

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              CAMPUS COLLABORATION
            </p>

            <h1>
              Explore Projects
            </h1>

          </div>


          {/* CREATE PROJECT BUTTON */}

          <button
            className="create-project-button"
            onClick={() => navigate("/create-project")}
          >
            + Create Project
          </button>

        </header>


        {/* PROJECTS */}

        <section className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <span className="event-category">
                {project.category}
              </span>


              <h2>
                {project.title}
              </h2>


              <p>
                {project.description}
              </p>


              <span className="project-members">
                {project.members}
              </span>


              {/* BUTTONS */}

              <div className="project-buttons">

                <button
                  className="view-project-button"
                  onClick={() =>
                    navigate(`/projects/${project.id}`)
                  }
                >
                  View Project
                </button>


                <button
                  className="join-project-button"
                  onClick={() =>
                    navigate(`/join-project/${project.id}`)
                  }
                >
                  Join Project →
                </button>

              </div>

            </div>

          ))}

        </section>

      </main>

    </div>
  );
}

export default Projects;