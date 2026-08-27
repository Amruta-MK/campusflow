import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      // Get logged-in user's ID from JWT
      let currentUserId = null;

      try {
        const payload = JSON.parse(
          atob(token.split(".")[1])
        );

        currentUserId = payload.id;
      } catch (error) {
        console.error("Invalid token");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/projects"
        );

        const data = await response.json();

        if (response.ok) {

          // Show ONLY projects created by OTHER users
          const otherProjects = data.filter(
            (project) =>
              project.leader?._id !== currentUserId
          );

          setProjects(otherProjects);

        } else {
          console.log(data.message);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();

  }, [navigate]);


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
            className="dashboard-nav-item active"
            onClick={() => navigate("/projects")}
          >
            ▣ Projects
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() => navigate("/profile")}
          >
            ◉ Profile
          </button>

        </nav>


        <button
          className="logout-button"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          ← Log out
        </button>

      </aside>


      {/* MAIN CONTENT */}

      <main className="dashboard-main-page">

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              PROJECT COLLABORATION
            </p>

            <h1>
              Discover Projects
            </h1>

          </div>


          {/* CREATE PROJECT */}

          <button
            className="create-project-button"
            onClick={() => navigate("/create-project")}
          >
            + Create Project
          </button>

        </header>


        {/* OTHER USERS' PROJECTS */}

        <section className="projects-grid">

          {projects.length === 0 ? (

            <div className="empty-projects">

              <h2>
                No projects available
              </h2>

              <p>
                There are no projects from other students yet.
              </p>

            </div>

          ) : (

            projects.map((project) => (

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
                      navigate(
                        `/projects/${project._id}`
                      )
                    }
                  >
                    View Project
                  </button>


                  <button
                    className="join-project-button"
                    onClick={() =>
                      navigate(
                        `/join-project/${project._id}`
                      )
                    }
                  >
                    Join Project →
                  </button>

                </div>

              </div>

            ))

          )}

        </section>

      </main>

    </div>
  );
}

export default Projects;