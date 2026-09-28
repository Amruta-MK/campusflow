import { useNavigate } from "react-router-dom";
import "./App.css";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="get-started-page">

      <div className="get-started-card">

        <div className="logo">

          <span className="logo-mark">
            ✦
          </span>

          Project Collaboration Hub

        </div>


        <p className="eyebrow">
          WELCOME TO PROJECT COLLABORATION HUB
        </p>


        <h1>
          Find projects.
          <br />
          <span>Build together.</span>
        </h1>


        <p className="get-started-description">
          Discover projects, connect with students, and build your team
          together.
        </p>


        <div className="get-started-options">


          <div className="start-option">

            <div>

              <h2>
                Already have an account?
              </h2>

              <p>
                Log in and continue building projects with your team.
              </p>

            </div>


            <button
              className="primary-button"
              onClick={() => navigate("/login")}
            >
              Log in →
            </button>

          </div>


          <div className="start-option">

            <div>

              <h2>
                New here?
              </h2>

              <p>
                Create your account and start collaborating on projects.
              </p>

            </div>


            <button
              className="secondary-button"
              onClick={() => navigate("/signup")}
            >
              Create an account →
            </button>

          </div>


        </div>


        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to home
        </button>

      </div>

    </div>
  );
}

export default GetStarted;