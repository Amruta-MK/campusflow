import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function Dashboard() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [userName, setUserName] = useState("Student");


  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }


    // Get user name from JWT

    try {

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      if (payload.name) {
        setUserName(payload.name);
      }

    } catch (error) {

      console.error("Invalid token");

    }


    // Get MY projects

    const fetchMyProjects = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/projects/my-projects",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        const data = await response.json();


        if (response.ok) {

          setProjects(data);

        } else {

          console.log(data.message);

        }

      } catch (error) {

        console.error(error);

      }

    };


    fetchMyProjects();

  }, [navigate]);


  return (

    <div className="dashboard-page">


      {/* SIDEBAR */}

      <aside className="dashboard-sidebar">

        <div className="logo">

          <span className="logo-mark">
            ✦
          </span>

          CampusFlow

        </div>


        <nav className="dashboard-nav">


          <button
            className="dashboard-nav-item active"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            ⌂ Dashboard
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() =>
              navigate("/projects")
            }
          >
            ▣ Projects
          </button>


          <button
            className="dashboard-nav-item"
            onClick={() =>
              navigate("/profile")
            }
          >
            ◉ Profile
          </button>


        </nav>


        <button
          className="logout-button"
          onClick={() => {

            localStorage.removeItem("token");

            navigate("/");

          }}
        >
          ← Log out
        </button>


      </aside>


      {/* MAIN */}

      <main className="dashboard-main-page">


        <header className="dashboard-header">

          <div>

            <p className="eyebrow">
              PROJECT COLLABORATION PLATFORM
            </p>


            <h1>
              Welcome, {userName}.
            </h1>

          </div>


        </header>


        {/* QUICK ACTIONS */}

       <div className="dashboard-create-section">

  <button
    className="create-project-button"
    onClick={() => navigate("/create-project")}
  >
    + Create Project
  </button>

</div>


        {/* MY PROJECTS */}

        <section className="my-projects-section">


          <div className="panel-heading">

            <h2>
              My Projects
            </h2>

          </div>


          {projects.length === 0 ? (

            <div className="empty-projects">

              <p>
                You haven't created any projects yet.
              </p>


              <button
                className="create-project-button"
                onClick={() =>
                  navigate("/create-project")
                }
              >
                + Create Your First Project
              </button>

            </div>

          ) : (

            <div className="dashboard-project-list">


              {projects.map((project) => (

                <div
                  className="dashboard-project-card"
                  key={project._id}
                >

                  <div>

                    <span className="event-category">
                      {project.category}
                    </span>


                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.description}
                    </p>

                  </div>


                  {/* ONLY MANAGE */}

                  <button
                    className="manage-project-button"
                    onClick={() =>
                      navigate(
                        `/manage-project/${project._id}`
                      )
                    }
                  >
                    Manage Project →
                  </button>


                </div>

              ))}


            </div>

          )}


        </section>


      </main>

    </div>

  );

}

export default Dashboard;