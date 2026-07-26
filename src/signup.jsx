import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

 const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/dashboard");
    } else {
      alert("Signup failed");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cannot connect to the server");
  }
};

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="logo">
          <span className="logo-mark">✦</span>
          CampusFlow
        </div>

        <p className="eyebrow">JOIN YOUR CAMPUS</p>

        <h1>
          Your campus.
          <br />
          <span>Your flow.</span>
        </h1>

        <p className="signup-description">
          Create your account and connect with everything happening around you.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="you@college.edu"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="primary-button signup-button"
          >
            Create Account →
          </button>
        </form>

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

export default Signup;