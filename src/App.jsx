import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./dashboard";
import Signup from "./signup";
import GetStarted from "./GetStarted";
import AdminDashboard from "./AdminDashboard";
import Projects from "./projects";
import ProjectDetails from "./ProjectDetails";
import JoinProject from "./JoinProject";
import ManageProject from "./ManageProject";
import CreateProject from "./CreateProject";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-mark">✦</span>
          CampusFlow
        </div>


        <div className="nav-links">

          <a href="#features">
            Features
          </a>

          <a href="#how-it-works">
            How it works
          </a>

          <a href="#about">
            About
          </a>

        </div>


        <button
          className="nav-button"
          onClick={() => navigate("/get-started")}
        >
          Get Started →
        </button>

      </nav>


      {/* HERO */}

      <main className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            THE CAMPUS OPERATING SYSTEM
          </p>


          <h1>
            Everything happening
            <br />
            on your campus.
            <br />
            <span>In one flow.</span>
          </h1>


          <p className="hero-description">
            CampusFlow brings students, clubs, events, projects, and
            opportunities together in one connected platform.
          </p>


          

        </div>


        {/* DASHBOARD PREVIEW */}

        <div className="hero-visual">

          <div className="visual-card">

            <div className="card-header">

              <span>
                campusflow / dashboard
              </span>

              <span className="status">
                ● LIVE
              </span>

            </div>


            <div className="dashboard-content">

              <div className="dashboard-sidebar">

                <div className="side-icon active">
                  ⌂
                </div>

                <div className="side-icon">
                  ◈
                </div>

                <div className="side-icon">
                  ♧
                </div>

                <div className="side-icon">
                  ▣
                </div>

              </div>


              <div className="dashboard-main">

                <p className="small-label">
                  YOUR CAMPUS, CONNECTED
                </p>


                <h2>
                  Good morning, student.
                </h2>


                <div className="dashboard-grid">

                  <div className="mini-card">

                    <span>
                      Upcoming Events
                    </span>

                    <strong>
                      12
                    </strong>

                  </div>


                  <div className="mini-card">

                    <span>
                      Active Projects
                    </span>

                    <strong>
                      08
                    </strong>

                  </div>

                </div>


                <div className="activity-card">

                  <span>
                    RECENT ACTIVITY
                  </span>


                  <p>
                    New event added to your campus calendar
                  </p>


                  <div className="activity-line"></div>


                  <p>
                    Team invitation received
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* FEATURES */}

      <section
        id="features"
        className="info-section"
      >

        <p className="eyebrow">
          EVERYTHING IN ONE PLACE
        </p>


        <h2>
          Your campus,
          <br />
          connected.
        </h2>


        <div className="feature-grid">

          <div className="feature-card">

            <span>
              01
            </span>

            <h3>
              Events
            </h3>

            <p>
              Discover everything happening around your campus.
            </p>

          </div>


          <div className="feature-card">

            <span>
              02
            </span>

            <h3>
              Clubs
            </h3>

            <p>
              Find communities and connect with people who share your interests.
            </p>

          </div>


          <div className="feature-card">

            <span>
              03
            </span>

            <h3>
              Projects
            </h3>

            <p>
              Collaborate with students and build something meaningful.
            </p>

          </div>


          <div className="feature-card">

            <span>
              04
            </span>

            <h3>
              Opportunities
            </h3>

            <p>
              Never miss an opportunity to learn, grow, and participate.
            </p>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="how-section"
      >

        <p className="eyebrow">
          SIMPLE. CONNECTED. CAMPUS-WIDE.
        </p>


        <h2>
          Everything flows
          <br />
          together.
        </h2>


        <div className="steps">

          <div className="step">

            <strong>
              01
            </strong>

            <h3>
              Create your account
            </h3>

            <p>
              Join CampusFlow using your college email and create your student profile.
            </p>

          </div>


          <div className="step">

            <strong>
              02
            </strong>

            <h3>
              Discover your campus
            </h3>

            <p>
              Explore events, clubs, projects, and opportunities around you.
            </p>

          </div>


          <div className="step">

            <strong>
              03
            </strong>

            <h3>
              Get involved
            </h3>

            <p>
              Join communities, participate in events, and collaborate with others.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="about-section"
      >

        <p className="eyebrow">
          ABOUT CAMPUSFLOW
        </p>


        <h2>
          One platform.
          <br />
          Every campus possibility.
        </h2>


        <p className="about-description">
          CampusFlow is designed to bring the entire campus community
          together in one connected space.
        </p>

      </section>


      {/* BOTTOM */}

      <section className="bottom-section">

        <p>
          ONE PLATFORM. EVERY CAMPUS POSSIBILITY.
        </p>

      </section>

    </div>
  );
}


function App() {

  return (

    <BrowserRouter>

     <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/get-started"
    element={<GetStarted />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/signup"
    element={<Signup />}
  />

  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/admin-dashboard"
    element={<AdminDashboard />}
  />

 

<Route
  path="/projects"
  element={<Projects />}
/>

<Route
  path="/projects/:projectId"
  element={<ProjectDetails />}
/>

<Route
  path="/join-project/:projectId"
  element={<JoinProject />}
/>




<Route
  path="/manage-project/:projectId"
  element={<ManageProject />}
/>

<Route
  path="/create-project"
  element={<CreateProject />}
/>
</Routes>

    </BrowserRouter>

  );

}


export default App;