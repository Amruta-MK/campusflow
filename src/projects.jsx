import { useNavigate } from "react-router-dom";
import "./App.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

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


      <main className="dashboard-main-page">

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              COLLABORATE AND BUILD
            </p>

            <h1>
              Student Projects
            </h1>

          </div>

        </header>


        <section className="project-grid">

          <div className="project-card">

            <div className="project-top">
              <span className="project-status">
                IN PROGRESS
              </span>

              <span>
                4 MEMBERS
              </span>
            </div>

            <h2>
              CampusFlow
            </h2>

            <p>
              A connected platform for students, clubs, events, and
              opportunities.
            </p>

            <div className="project-footer">
              <span>Web Development</span>

              <button className="project-button">
                View Project →
              </button>
            </div>

          </div>


          <div className="project-card">

            <div className="project-top">
              <span className="project-status">
                OPEN
              </span>

              <span>
                3 MEMBERS
              </span>
            </div>

            <h2>
              Smart Campus
            </h2>

            <p>
              Building technology solutions to improve campus life.
            </p>

            <div className="project-footer">
              <span>Innovation</span>

              <button className="project-button">
                Join Project →
              </button>
            </div>

          </div>


          <div className="project-card">

            <div className="project-top">
              <span className="project-status">
                OPEN
              </span>

              <span>
                2 MEMBERS
              </span>
            </div>

            <h2>
              Student Marketplace
            </h2>

            <p>
              A platform for students to buy, sell, and exchange items.
            </p>

            <div className="project-footer">
              <span>Full Stack</span>

              <button className="project-button">
                Join Project →
              </button>
            </div>

          </div>


          <div className="project-card">

            <div className="project-top">
              <span className="project-status">
                IN PROGRESS
              </span>

              <span>
                5 MEMBERS
              </span>
            </div>

            <h2>
              Mental Health Support
            </h2>

            <p>
              Creating a supportive digital space for student wellbeing.
            </p>

            <div className="project-footer">
              <span>Social Impact</span>

              <button className="project-button">
                View Project →
              </button>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Projects;