import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function JoinProject() {

  const navigate = useNavigate();
  const { projectId } = useParams();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);


  // ==========================================
  // GET LOGGED-IN USER DETAILS
  // ==========================================

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      if (payload.name) {
        setUserName(payload.name);
      }

      if (payload.email) {
        setUserEmail(payload.email);
      }

    } catch (error) {

      console.error("Invalid token");

    }

  }, [navigate]);


  // ==========================================
  // SUBMIT JOIN REQUEST
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }


    // Check required links

    if (!linkedin.trim() || !github.trim()) {

      alert(
        "Please provide your LinkedIn and GitHub links."
      );

      return;
    }


    setLoading(true);


    try {

      const response = await fetch(
        `http://localhost:5000/api/projects/${projectId}/join`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({

            linkedin,
            github,
            message,

          }),
        }
      );


      const data = await response.json();


      if (response.ok) {

        alert(
          "Join request sent successfully!"
        );

        navigate(
          `/projects/${projectId}`
        );

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.error(error);

      alert(
        "Cannot connect to server"
      );

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // PAGE
  // ==========================================

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


        <p className="eyebrow">
          JOIN PROJECT
        </p>


        <h1>
          Request to Join
        </h1>


        <p className="project-details-description">
          Tell the project leader a little about
          yourself before sending your request.
        </p>


        {/* ======================================
            JOIN FORM
            ====================================== */}

        <form
          onSubmit={handleSubmit}
          className="join-project-form"
        >


          {/* FULL NAME */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              value={userName}
              readOnly
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              value={userEmail}
              readOnly
            />

          </div>


          {/* GITHUB */}

          <div className="form-group">

            <label>
              GitHub Profile
            </label>

            <input
              type="url"
              placeholder="https://github.com/yourusername"
              value={github}
              onChange={(e) =>
                setGithub(e.target.value)
              }
              required
            />

          </div>


          {/* LINKEDIN */}

          <div className="form-group">

            <label>
              LinkedIn Profile
            </label>

            <input
              type="url"
              placeholder="https://www.linkedin.com/in/yourname"
              value={linkedin}
              onChange={(e) =>
                setLinkedin(e.target.value)
              }
              required
            />

          </div>


          {/* WHY JOIN */}

          <div className="form-group">

            <label>
              Why do you want to join this project?
            </label>

            <textarea
              placeholder="Tell the project leader about your skills and why you are interested in this project..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              rows="5"
            />

          </div>


          {/* NOTE */}

          <p className="join-form-note">
            Your request will be reviewed by the
            project leader. You can send only one
            request for this project.
          </p>


          {/* SUBMIT */}

          <button
            type="submit"
            className="join-submit-button join-project-button"
            disabled={loading}
          >

            {loading
              ? "Sending..."
              : "Send Join Request →"}

          </button>


        </form>


      </main>

    </div>

  );
}

export default JoinProject;