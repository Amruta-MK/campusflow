import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


function Login() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });


  const handleChange = (event) => {

    setFormData({

      ...formData,

      [event.target.name]: event.target.value,

    });

  };


  const handleSubmit = (event) => {
  event.preventDefault();

  if (formData.email === "admin@campusflow.com") {
    navigate("/admin-dashboard");
  } else {
    navigate("/dashboard");
  }
};

  return (

    <div className="signup-page">

      <div className="signup-card">


        <div className="logo">

          <span className="logo-mark">
            ✦
          </span>

          CampusFlow

        </div>


        <p className="eyebrow">
          WELCOME BACK
        </p>


        <h1>
          Continue your
          <br />
          <span>campus flow.</span>
        </h1>


        <p className="signup-description">
          Log in to access your campus dashboard.
        </p>


        <form onSubmit={handleSubmit}>


          <label>
            Email
          </label>


          <input
            type="email"
            name="email"
            placeholder="you@college.edu"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <label>
            Password
          </label>


          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />


          <button
            type="submit"
            className="primary-button signup-button"
          >
            Log in →
          </button>


        </form>


        <button
          className="back-button"
          onClick={() => navigate("/get-started")}
        >
          ← Back
        </button>


      </div>

    </div>

  );

}


export default Login;