import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [project, setProject] = useState(null);

  // =====================================================
  // JOIN REQUEST STATUS
  // =====================================================

  const [requestStatus, setRequestStatus] = useState(null);


  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/projects/${projectId}`
        );

        const data = await response.json();

        if (response.ok) {
          setProject(data);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProject();
  }, [projectId]);


  // =====================================================
  // GET MY JOIN REQUEST STATUS
  // =====================================================

  useEffect(() => {
    const fetchRequestStatus = async () => {

      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      try {

        const response = await fetch(
          `http://localhost:5000/api/projects/${projectId}/my-request`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setRequestStatus(data.status);
        } else {
          // No request yet
          setRequestStatus(null);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchRequestStatus();

  }, [projectId]);


  if (!project) {
    return (
      <div className="project-details-page">
        <h1>Loading project...</h1>
      </div>
    );
  }


  // =====================================================
  // GET LOGGED-IN USER ID
  // =====================================================

  const token = localStorage.getItem("token");

  let currentUserId = null;

  if (token) {
    try {
      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      currentUserId = payload.id;

    } catch (error) {
      console.error("Invalid token");
    }
  }


  // =====================================================
  // CHECK LEADER
  // =====================================================

  const isLeader =
    currentUserId &&
    project.leader &&
    currentUserId === project.leader._id;


  return (
    <div className="project-details-page">

      <button
        className="back-button"
        onClick={() => navigate("/projects")}
      >
        ← Back to Projects
      </button>


      <main className="project-details-card">

        <span className="event-category">
          {project.category}
        </span>


        <h1>
          {project.title}
        </h1>


        <p className="project-details-description">
          {project.description}
        </p>


        <div className="project-details-grid">

          <div className="project-detail-box">
            <span>PROJECT GOAL</span>

            <p>
              {project.goal}
            </p>
          </div>


          <div className="project-detail-box">
            <span>TECHNOLOGIES</span>

            <p>
              {project.technologies}
            </p>
          </div>


          <div className="project-detail-box">
            <span>TEAM SIZE</span>

            <p>
              {project.teamSize} members
            </p>
          </div>

        </div>


        {/* LEADER */}

        <div className="project-members-section">

          <h2>
            Project Leader
          </h2>

          <div className="project-member">

           <div className="member-avatar">
  {project.leader?.profileImage ? (
    <img
      src={project.leader.profileImage}
      alt={project.leader.name}
      className="member-avatar-image"
    />
  ) : (
    project.leader?.name?.charAt(0)
  )}
</div>
            <div>

              <strong>
                {project.leader?.name}
              </strong>

              <span>
                👑 Project Leader
              </span>

            </div>

          </div>

        </div>


        {/* MEMBERS */}

        <div className="project-members-section">

          <h2>
            Members
          </h2>


          {project.members?.length === 0 ? (

            <p>
              No members yet.
            </p>

          ) : (

            project.members.map((member) => (

              <div
                className="project-member"
                key={member._id}
              >

               <div className="member-avatar">
  {member.profileImage ? (
    <img
      src={member.profileImage}
      alt={member.name}
      className="member-avatar-image"
    />
  ) : (
    member.name?.charAt(0)
  )}
</div>

                <div>

                  <strong>
                    {member.name}
                  </strong>

                  <span>
                    👤 Project Member
                  </span>

                </div>

              </div>

            ))
          )}

        </div>


        {/* =================================================
            LEADER BUTTON
            ================================================= */}

        {isLeader && (

          <button
            className="manage-project-button"
            onClick={() =>
              navigate(`/manage-project/${projectId}`)
            }
          >
            Manage Project →
          </button>

        )}


        {/* =================================================
            OTHER USER BUTTON
            ================================================= */}

        {!isLeader && (

          <>

            {/* NO REQUEST */}

            {!requestStatus && (

              <button
                className="join-project-button project-details-join"
                onClick={() =>
                  navigate(`/join-project/${projectId}`)
                }
              >
                Request to Join Project →
              </button>

            )}


            {/* PENDING */}

            {requestStatus === "pending" && (

              <button
                className="join-project-button project-details-join"
                disabled
              >
                🟡 Request Pending
              </button>

            )}


            {/* APPROVED */}

            {requestStatus === "approved" && (

              <button
                className="join-project-button project-details-join"
                disabled
              >
                🟢 You are a Member
              </button>

            )}


            {/* REJECTED */}

            {requestStatus === "rejected" && (

              <button
                className="join-project-button project-details-join"
                disabled
              >
                🔴 Request Rejected
              </button>

            )}

          </>

        )}

      </main>

    </div>
  );
}

export default ProjectDetails;