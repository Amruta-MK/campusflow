import { useNavigate } from "react-router-dom";
import "./App.css";

function Clubs() {
  const navigate = useNavigate();

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
            className="dashboard-nav-item active"
          >
            ♧ Clubs
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() => navigate("/projects")}
          >
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
              CAMPUS COMMUNITIES
            </p>

            <h1>
              Explore Clubs
            </h1>

          </div>

        </header>


        {/* CLUBS */}

        <section className="club-grid">


          {/* WEB DEVELOPMENT CLUB */}

          <div className="club-card">

            <div className="club-icon">
              {"</>"}
            </div>

            <h2>
              Web Development Club
            </h2>

            <p>
              Learn, build, and collaborate on exciting web projects.
            </p>

            <button
              className="join-button"
              onClick={() => navigate("/join-club")}
            >
              Join Club →
            </button>

          </div>


          {/* AI & ML CLUB */}

          <div className="club-card">

            <div className="club-icon">
              AI
            </div>

            <h2>
              AI & ML Club
            </h2>

            <p>
              Explore artificial intelligence and machine learning.
            </p>

            <button
              className="join-button"
              onClick={() => navigate("/join-club")}
            >
              Join Club →
            </button>

          </div>


          {/* ROBOTICS CLUB */}

          <div className="club-card">

            <div className="club-icon">
              ⚡
            </div>

            <h2>
              Robotics Club
            </h2>

            <p>
              Design, build, and experiment with robotics technology.
            </p>

            <button
              className="join-button"
              onClick={() => navigate("/join-club")}
            >
              Join Club →
            </button>

          </div>


          {/* PHOTOGRAPHY CLUB */}

          <div className="club-card">

            <div className="club-icon">
              ◎
            </div>

            <h2>
              Photography Club
            </h2>

            <p>
              Capture moments and share your creativity with others.
            </p>

            <button
              className="join-button"
              onClick={() => navigate("/join-club")}
            >
              Join Club →
            </button>

          </div>


        </section>

      </main>

    </div>
  );
}

export default Clubs;