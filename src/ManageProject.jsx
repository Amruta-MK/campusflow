import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function ManageProject() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // LOAD PROJECT + JOIN REQUESTS
  // =====================================================

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const loadData = async () => {
      try {
        // Get project
        const projectResponse = await fetch(
          `http://localhost:5000/api/projects/${projectId}`
        );

        const projectData = await projectResponse.json();

        if (!projectResponse.ok) {
          alert(projectData.message);
          return;
        }

        setProject(projectData);

        // Get join requests
        const requestResponse = await fetch(
          `http://localhost:5000/api/projects/${projectId}/requests`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const requestData = await requestResponse.json();

        if (!requestResponse.ok) {
          alert(requestData.message);
          return;
        }

        setRequests(requestData);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [projectId, navigate]);

  // =====================================================
  // APPROVE REQUEST
  // =====================================================

  const approveRequest = async (requestId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5000/api/projects/${projectId}/requests/${requestId}/approve`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Student approved!");

        // Remove approved request from pending requests
        setRequests((previousRequests) =>
          previousRequests.filter(
            (request) => request._id !== requestId
          )
        );

        // Reload project so the new member appears
        const updatedProjectResponse = await fetch(
          `http://localhost:5000/api/projects/${projectId}`
        );

        const updatedProjectData =
          await updatedProjectResponse.json();

        if (updatedProjectResponse.ok) {
          setProject(updatedProjectData);
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Approve error:", error);
      alert("Something went wrong while approving.");
    }
  };

  // =====================================================
  // REJECT REQUEST
  // =====================================================

  const rejectRequest = async (requestId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5000/api/projects/${projectId}/requests/${requestId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Join request rejected!");

        // Remove rejected request from screen
        setRequests((previousRequests) =>
          previousRequests.filter(
            (request) => request._id !== requestId
          )
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Reject error:", error);
      alert("Something went wrong while rejecting.");
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="project-details-page">
        <h1>Loading...</h1>
      </div>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="project-details-page">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={() =>
          navigate(`/projects/${projectId}`)
        }
      >
        ← Back to Project
      </button>


      <main className="project-details-card">

        {/* HEADER */}

        <p className="eyebrow">
          PROJECT MANAGEMENT
        </p>

        <h1>
          {project?.title}
        </h1>

        <p className="project-details-description">
          You are the leader of this project.
        </p>


        {/* =================================================
            JOIN REQUESTS
        ================================================= */}

        <div className="project-members-section">

          <h2>
            Join Requests
          </h2>


          {requests.length === 0 ? (

            <p>
              No pending join requests.
            </p>

          ) : (

            <div className="project-members-list">

              {requests.map((request) => (

                <div
                  className="project-member"
                  key={request._id}
                >

                  {/* AVATAR */}

                  <div className="member-avatar">
                    {request.name
                      ? request.name.charAt(0).toUpperCase()
                      : "U"}
                  </div>


                  {/* REQUEST DETAILS */}

                  <div style={{ flex: 1 }}>

                    <strong>
                      {request.name || "Student"}
                    </strong>

                    <span>
                      {request.email || "No email provided"}
                    </span>


                    {/* GITHUB */}

                    {request.github && (
                      <p>
                        <strong>
                          GitHub:
                        </strong>{" "}
                        {request.github}
                      </p>
                    )}


                    {/* LINKEDIN */}

                    {request.linkedin && (
                      <p>
                        <strong>
                          LinkedIn:
                        </strong>{" "}
                        {request.linkedin}
                      </p>
                    )}


                    {/* MESSAGE */}

                    {request.message && (
                      <>
                        <p>
                          <strong>
                            Why they want to join:
                          </strong>
                        </p>

                        <p>
                          {request.message}
                        </p>
                      </>
                    )}


                    {/* APPROVE / REJECT */}

                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >

                      <button
                        className="join-project-button"
                        onClick={() =>
                          approveRequest(request._id)
                        }
                      >
                        ✓ Approve
                      </button>


                      <button
                        className="back-button"
                        onClick={() =>
                          rejectRequest(request._id)
                        }
                      >
                        ✕ Reject
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* =================================================
            CURRENT MEMBERS
        ================================================= */}

        <div className="project-members-section">

          <h2>
            Current Members
          </h2>


          <div className="project-members-list">

            {/* PROJECT LEADER */}

            <div className="project-member">

              <div className="member-avatar">

                {project?.leader?.name
                  ? project.leader.name
                      .charAt(0)
                      .toUpperCase()
                  : "L"}

              </div>


              <div>

                <strong>
                  {project?.leader?.name ||
                    "Project Leader"}
                </strong>

                <span>
                  👑 Project Leader
                </span>

              </div>

            </div>


            {/* PROJECT MEMBERS */}

            {project?.members?.map((member) => (

              <div
                className="project-member"
                key={member._id}
              >

                <div className="member-avatar">

                  {member?.name
                    ? member.name
                        .charAt(0)
                        .toUpperCase()
                    : "M"}

                </div>


                <div>

                  <strong>
                    {member?.name || "Member"}
                  </strong>

                  <span>
                    👤 Project Member
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}

export default ManageProject;