import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  // Get projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/projects"
        );

        const data = await response.json();

        if (response.ok) {
          setProjects(data);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

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
              key={project._id}
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
                {project.teamSize} members
              </span>


              {/* BUTTONS */}

              <div className="project-buttons">

                <button
                  className="view-project-button"
                  onClick={() =>
                    navigate(`/projects/${project._id}`)
                  }
                >
                  View Project
                </button>


                <button
                  className="join-project-button"
                  onClick={() =>
                    navigate(`/join-project/${project._id}`)
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