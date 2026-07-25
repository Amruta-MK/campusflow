import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function ManageProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const project = {
    title: "Campus Connect",
    leader: "Amruta",
  };

  const requests = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@college.edu",
      skills: "React, JavaScript",
      reason:
        "I want to improve my frontend skills and contribute to this project.",
    },
    {
      id: 2,
      name: "Sneha Patil",
      email: "sneha@college.edu",
      skills: "UI Design, Figma",
      reason:
        "I am interested in designing a better user experience for students.",
    },
  ];

  function handleAccept(name) {
    alert(`${name}'s request has been accepted!`);
  }

  function handleReject(name) {
    alert(`${name}'s request has been rejected.`);
  }

  return (
    <div className="manage-project-page">

      <button
        className="back-button"
        onClick={() => navigate(`/projects/${projectId}`)}
      >
        ← Back to Project
      </button>


      <header className="manage-project-header">

        <p className="eyebrow">
          CAMPUSFLOW / PROJECT MANAGEMENT
        </p>

        <h1>
          Manage
          <br />
          <span>{project.title}</span>
        </h1>

        <p>
          Review and manage requests from students who want to join your project.
        </p>

      </header>


      <main className="manage-project-container">

        <div className="manage-project-topbar">

          <div>

            <span className="event-category">
              PROJECT LEADER
            </span>

            <h2>
              Join Requests
            </h2>

          </div>

          <div className="request-count">
            {requests.length} Pending
          </div>

        </div>


        <div className="request-list">

          {requests.map((request) => (

            <div
              className="request-card"
              key={request.id}
            >

              <div className="request-header">

                <div className="request-avatar">
                  {request.name.charAt(0)}
                </div>

                <div>

                  <h3>
                    {request.name}
                  </h3>

                  <p>
                    {request.email}
                  </p>

                </div>

              </div>


              <div className="request-info">

                <div>

                  <span>
                    SKILLS
                  </span>

                  <p>
                    {request.skills}
                  </p>

                </div>


                <div>

                  <span>
                    WHY THEY WANT TO JOIN
                  </span>

                  <p>
                    {request.reason}
                  </p>

                </div>

              </div>


              <div className="request-actions">

                <button
                  className="accept-button"
                  onClick={() =>
                    handleAccept(request.name)
                  }
                >
                  ✓ Accept
                </button>


                <button
                  className="reject-button"
                  onClick={() =>
                    handleReject(request.name)
                  }
                >
                  ✕ Reject
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default ManageProject;