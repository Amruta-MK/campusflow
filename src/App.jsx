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
import Profile from "./Profile";

import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">✦</span>
          Project Collaboration Hub
        </div>

        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
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
            PROJECT COLLABORATION PLATFORM
          </p>

          <h1>
            Ideas become better
            <br />
            when people
            <br />
            <span>build together.</span>
          </h1>

          <p className="hero-description">
            A platform where students can discover projects,
            connect with teammates, and collaborate to turn
            ideas into reality.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/get-started")}
          >
            Get Started →
          </button>

        </div>


        {/* CREATIVE VISUAL */}
        <div className="hero-visual">

          <div className="collaboration-visual">

            <div className="visual-circle circle-one">
              ✦
            </div>

            <div className="visual-circle circle-two">
              +
            </div>

            <div className="visual-circle circle-three">
              ◇
            </div>

            <div className="visual-circle circle-four">
              ○
            </div>

            <div className="visual-center">
              <span>BUILD</span>
              <strong>TOGETHER</strong>
            </div>

            <div className="connection-line line-one"></div>
            <div className="connection-line line-two"></div>
            <div className="connection-line line-three"></div>
            <div className="connection-line line-four"></div>

          </div>

        </div>

      </main>


      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">

        <p className="eyebrow">
          HOW IT WORKS
        </p>

        <h2>
          Simple connection.
          <br />
          Meaningful collaboration.
        </h2>

        <div className="steps">

          <div className="step">
            <strong>01</strong>
            <h3>Discover</h3>
            <p>
              Find projects and ideas that interest you.
            </p>
          </div>

          <div className="step">
            <strong>02</strong>
            <h3>Connect</h3>
            <p>
              Connect with students who share your interests
              and skills.
            </p>
          </div>

          <div className="step">
            <strong>03</strong>
            <h3>Collaborate</h3>
            <p>
              Work together and turn ideas into real projects.
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="about-section">

        <p className="eyebrow">
          ABOUT THE PLATFORM
        </p>

        <h2>
          One place to
          <br />
          <span>build together.</span>
        </h2>

        <p className="about-description">
          Project Collaboration Hub brings students together
          around ideas, skills, and shared goals — making it
          easier to find the right people and collaborate.
        </p>

      </section>


      {/* BOTTOM CTA */}
      <section className="bottom-section">

        <p>
          HAVE AN IDEA?
        </p>

        <h2>
          Build it together.
        </h2>

        

      </section>

    </div>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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
          path="/profile"
          element={<Profile />}
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