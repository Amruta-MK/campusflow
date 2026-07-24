import { useNavigate } from "react-router-dom";
import "./App.css";

function EventDetails() {
  const navigate = useNavigate();

  return (
    <div className="event-details-page">

      <header className="event-details-header">

        <button
          className="back-button"
          onClick={() => navigate("/events")}
        >
          ← Back to Events
        </button>

        <div className="logo">
          <span className="logo-mark">✦</span>
          CampusFlow
        </div>

      </header>


      <main className="event-details-container">

        <p className="eyebrow">
          CAMPUS EVENT
        </p>

        <h1>
          Tech Symposium 2026
        </h1>

        <p className="event-details-description">
          Explore the latest technologies, connect with industry experts,
          and learn from students and professionals.
        </p>


        <div className="event-info-grid">

          <div className="event-info-card">

            <span>DATE</span>

            <strong>
              24 July 2026
            </strong>

          </div>


          <div className="event-info-card">

            <span>TIME</span>

            <strong>
              10:00 AM
            </strong>

          </div>


          <div className="event-info-card">

            <span>LOCATION</span>

            <strong>
              Main Auditorium
            </strong>

          </div>

        </div>


        <div className="event-description-section">

          <h2>
            About this event
          </h2>

          <p>
            The Tech Symposium brings together students, developers,
            researchers, and technology enthusiasts to explore new ideas
            and innovations.
          </p>

          <p>
            Attend talks, participate in discussions, and connect with
            people who are passionate about technology.
          </p>

        </div>


        <button
          className="primary-button register-button"
          onClick={() => alert("You have registered for this event!")}
        >
          Register for Event →
        </button>

      </main>

    </div>
  );
}

export default EventDetails;