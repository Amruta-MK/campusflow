import { useNavigate } from "react-router-dom";
import "./App.css";

function CreateProject() {
  const navigate = useNavigate();

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const project = {
    title: formData.get("title"),
    category: formData.get("category"),
    description: formData.get("description"),
    goal: formData.get("goal"),
    technologies: formData.get("technologies"),
    teamSize: formData.get("teamSize"),
  };

  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://localhost:5000/api/projects/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(project),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/projects");
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
}
  return (
    <div className="create-project-page">

      <div className="create-project-card">

        <button
          className="back-button"
          onClick={() => navigate("/projects")}
        >
          ← Back to Projects
        </button>

        <p className="eyebrow">
          CAMPUSFLOW / PROJECTS
        </p>

        <h1>
          Create a
          <br />
          <span>new project.</span>
        </h1>

        <p className="create-project-description">
          Start an idea, build a team, and collaborate with students
          across your campus.
        </p>

        <form onSubmit={handleSubmit}>

          <label>
            Project Title
          </label>

          <input
            name="title"
            type="text"
            placeholder="e.g. Campus Connect"
            required
          />

          <label>
            Project Category
          </label>

          <select
            name="category"
            required
          >
            <option value="">
              Select a category
            </option>

            <option value="WEB DEVELOPMENT">
              Web Development
            </option>

            <option value="ARTIFICIAL INTELLIGENCE">
              Artificial Intelligence
            </option>

            <option value="IOT & TECHNOLOGY">
              IoT & Technology
            </option>

            <option value="MOBILE DEVELOPMENT">
              Mobile Development
            </option>

            <option value="OTHER">
              Other
            </option>
          </select>

          <label>
            Project Description
          </label>

          <textarea
            name="description"
            rows="4"
            placeholder="What is your project about?"
            required
          ></textarea>

          <label>
            Project Goal
          </label>

          <textarea
            name="goal"
            rows="4"
            placeholder="What do you want to achieve?"
            required
          ></textarea>

          <label>
            Technologies
          </label>

          <input
            name="technologies"
            type="text"
            placeholder="e.g. React, Node.js, MongoDB"
            required
          />

          <label>
            Maximum Team Size
          </label>

          <input
            name="teamSize"
            type="number"
            min="2"
            max="20"
            placeholder="e.g. 5"
            required
          />

          <button
            type="submit"
            className="create-submit-button"
          >
            Create Project →
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateProject;