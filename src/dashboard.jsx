import { useNavigate } from "react-router-dom";
import "./App.css";

function Dashboard() {
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
            className="dashboard-nav-item active"
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


      {/* MAIN DASHBOARD */}

      <main className="dashboard-main-page">

        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              YOUR CAMPUS, CONNECTED
            </p>

            <h1>
              Good morning, Student.
            </h1>

          </div>


          <div className="profile-circle">
            S
          </div>

        </header>


        {/* STATS */}

        <section className="dashboard-stats">

          <div className="stat-card">

            <span>
              UPCOMING EVENTS
            </span>

            <strong>
              12
            </strong>

            <p>
              +3 this week
            </p>

          </div>


          <div className="stat-card">

            <span>
              ACTIVE PROJECTS
            </span>

            <strong>
              08
            </strong>

            <p>
              2 need your attention
            </p>

          </div>


          <div className="stat-card">

            <span>
              CLUBS JOINED
            </span>

            <strong>
              05
            </strong>

            <p>
              Explore more clubs
            </p>

          </div>

        </section>


        {/* MAIN PANELS */}

        <section className="dashboard-grid-section">


          {/* EVENTS PANEL */}

          <div className="events-panel">

            <div className="panel-heading">

              <h2>
                Upcoming Events
              </h2>


              <button
                onClick={() => navigate("/events")}
              >
                View all →
              </button>

            </div>


            <div className="event-item">

              <div className="event-date">

                <strong>
                  24
                </strong>

                <span>
                  JUL
                </span>

              </div>


              <div>

                <h3>
                  Tech Symposium 2026
                </h3>

                <p>
                  10:00 AM · Main Auditorium
                </p>

              </div>

            </div>


            <div className="event-item">

              <div className="event-date">

                <strong>
                  27
                </strong>

                <span>
                  JUL
                </span>

              </div>


              <div>

                <h3>
                  Hackathon Team Meet
                </h3>

                <p>
                  2:00 PM · Innovation Lab
                </p>

              </div>

            </div>


            <div className="event-item">

              <div className="event-date">

                <strong>
                  02
                </strong>

                <span>
                  AUG
                </span>

              </div>


              <div>

                <h3>
                  Photography Club Meetup
                </h3>

                <p>
                  4:30 PM · Student Center
                </p>

              </div>

            </div>

          </div>


          {/* ACTIVITY PANEL */}

          <div className="activity-panel">

            <div className="panel-heading">

              <h2>
                Recent Activity
              </h2>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                You joined{" "}
                <strong>
                  Web Development Club
                </strong>
              </p>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                New project invitation from{" "}
                <strong>
                  Team Alpha
                </strong>
              </p>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                New announcement from your department
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;