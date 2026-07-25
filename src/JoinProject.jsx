import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function JoinProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projects = {
    "campus-connect": "Campus Connect",
    "ai-health-assistant": "AI Health Assistant",
    "smart-campus": "Smart Campus",
    "student-marketplace": "Student Marketplace",
  };

  const projectName = projects[projectId];

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Your request has been sent to the project leader!"
    );

    navigate(`/projects/${projectId}`);
  }

  return (
    <div className="join-project-page">

      <div className="join-project-card">

        <button
          className="back-button"
          onClick={() =>
            navigate(`/projects/${projectId}`)
          }
        >
          ← Back to Project
        </button>


        <p className="eyebrow">
          CAMPUSFLOW / PROJECT REQUEST
        </p>


        <h1>
          Join a
          <br />
          <span>project.</span>
        </h1>


        <p className="join-project-description">
          Send a request to the project leader to become a member of:
        </p>


        <div className="selected-project">
          {projectName}
        </div>


        <form onSubmit={handleSubmit}>

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
            Your Skills
          </label>

          <input
            type="text"
            placeholder="e.g. React, Python, UI Design"
            required
          />


          <label>
            Why do you want to join this project?
          </label>

          <textarea
            rows="5"
            placeholder="Tell the project leader why you are interested..."
            required
          ></textarea>


          <button
            type="submit"
            className="primary-button join-submit-button"
          >
            Send Join Request →
          </button>

        </form>

      </div>

    </div>
  );
}

export default JoinProject;