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

          CampusFlow

        </div>


        <p className="eyebrow">
          WELCOME TO CAMPUSFLOW
        </p>


        <h1>
          Your campus.
          <br />
          <span>Your flow.</span>
        </h1>


        <p className="get-started-description">
          Connect with everything happening around your campus.
        </p>


        <div className="get-started-options">


          <div className="start-option">

            <div>

              <h2>
                Already have an account?
              </h2>

              <p>
                Log in and continue your campus journey.
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
                New to CampusFlow?
              </h2>

              <p>
                Create your account and join your campus community.
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