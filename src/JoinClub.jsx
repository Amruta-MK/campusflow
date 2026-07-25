import { useNavigate } from "react-router-dom";
import "./App.css";

function JoinClub() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    alert("Your club joining request has been submitted!");

    navigate("/clubs");
  }

  return (
    <div className="join-club-page">

      <div className="join-club-card">

        <button
          className="back-button"
          onClick={() => navigate("/clubs")}
        >
          ← Back to Clubs
        </button>


        <p className="eyebrow">
          CAMPUSFLOW / CLUB MEMBERSHIP
        </p>


        <h1>
          Join a
          <br />
          <span>community.</span>
        </h1>


        <p className="join-club-description">
          Fill in your details to send a request to join a campus club.
        </p>


        <form onSubmit={handleSubmit}>

          <label>
            Select Club
          </label>

          <select required>

            <option value="">
              Choose a club
            </option>

            <option value="web-development">
              Web Development Club
            </option>

            <option value="ai-ml">
              AI & ML Club
            </option>

            <option value="robotics">
              Robotics Club
            </option>

            <option value="photography">
              Photography Club
            </option>

          </select>


          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            required
          />


          <label>
            College Email
          </label>

          <input
            type="email"
            placeholder="you@college.edu"
            required
          />


          <label>
            Department
          </label>

          <input
            type="text"
            placeholder="e.g. Computer Science"
            required
          />


          <label>
            Why do you want to join?
          </label>

          <textarea
            placeholder="Tell us a little about your interest..."
            rows="5"
            required
          ></textarea>


          <button
            type="submit"
            className="primary-button join-submit-button"
          >
            Submit Join Request →
          </button>

        </form>

      </div>

    </div>
  );
}

export default JoinClub;