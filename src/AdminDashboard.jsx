import { useNavigate } from "react-router-dom";
import "./App.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}

      <aside className="dashboard-sidebar">

        <div className="logo">
          <span className="logo-mark">✦</span>
          CampusFlow
        </div>

        <p className="admin-label">
          ADMIN PANEL
        </p>

        <nav className="dashboard-nav">

          <button className="dashboard-nav-item active">
            ⌂ Overview
          </button>

          <button className="dashboard-nav-item">
            ◈ Manage Events
          </button>

          <button className="dashboard-nav-item">
            ♧ Manage Clubs
          </button>

          <button className="dashboard-nav-item">
            ▣ Manage Projects
          </button>

          <button className="dashboard-nav-item">
            ◉ Students
          </button>

          <button className="dashboard-nav-item">
            ▤ Announcements
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
              CAMPUS ADMINISTRATION
            </p>

            <h1>
              Admin Overview
            </h1>

          </div>


          <div className="profile-circle">
            A
          </div>

        </header>


        {/* STATISTICS */}

        <section className="dashboard-stats">

          <div className="stat-card">

            <span>
              TOTAL STUDENTS
            </span>

            <strong>
              1,248
            </strong>

            <p>
              +42 this month
            </p>

          </div>


          <div className="stat-card">

            <span>
              ACTIVE EVENTS
            </span>

            <strong>
              24
            </strong>

            <p>
              8 this week
            </p>

          </div>


          <div className="stat-card">

            <span>
              ACTIVE CLUBS
            </span>

            <strong>
              36
            </strong>

            <p>
              4 new this month
            </p>

          </div>

        </section>


        {/* ADMIN ACTIONS */}

        <section className="admin-actions-section">

          <div className="panel-heading">

            <h2>
              Quick Actions
            </h2>

          </div>


          <div className="admin-actions-grid">


            <button className="admin-action-card">

              <span className="action-icon">
                +
              </span>

              <div>

                <h3>
                  Create Event
                </h3>

                <p>
                  Add a new event to the campus calendar.
                </p>

              </div>

            </button>


            <button className="admin-action-card">

              <span className="action-icon">
                ♧
              </span>

              <div>

                <h3>
                  Manage Clubs
                </h3>

                <p>
                  Review and manage campus clubs.
                </p>

              </div>

            </button>


            <button className="admin-action-card">

              <span className="action-icon">
                ▣
              </span>

              <div>

                <h3>
                  Manage Projects
                </h3>

                <p>
                  Monitor student projects.
                </p>

              </div>

            </button>


            <button className="admin-action-card">

              <span className="action-icon">
                !
              </span>

              <div>

                <h3>
                  Post Announcement
                </h3>

                <p>
                  Share important updates with students.
                </p>

              </div>

            </button>

          </div>

        </section>


        {/* RECENT ACTIVITY */}

        <section className="dashboard-grid-section">

          <div className="events-panel">

            <div className="panel-heading">

              <h2>
                Recent Events
              </h2>

              <button>
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
                  324 registrations
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
                  Hackathon 2026
                </h3>

                <p>
                  186 registrations
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
                  Photography Exhibition
                </h3>

                <p>
                  96 registrations
                </p>

              </div>

            </div>

          </div>


          <div className="activity-panel">

            <div className="panel-heading">

              <h2>
                Recent Activity
              </h2>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                New student registered on CampusFlow
              </p>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                New club request submitted
              </p>

            </div>


            <div className="activity-item">

              <span className="activity-dot"></span>

              <p>
                Event registration reached 300 users
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;