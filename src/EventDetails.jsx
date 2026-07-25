import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function EventDetails() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const events = {
    "tech-symposium": {
      title: "Tech Symposium 2026",
      category: "TECHNOLOGY",
      date: "24 JUL 2026",
      time: "10:00 AM",
      location: "Main Auditorium",
      description:
        "Explore the latest trends in technology and innovation. Connect with students, professionals, and technology enthusiasts.",
    },

    "campus-hackathon": {
      title: "Campus Hackathon",
      category: "HACKATHON",
      date: "28 JUL 2026",
      time: "9:00 AM",
      location: "Innovation Lab",
      description:
        "Build something amazing with your team and solve real-world problems through technology.",
    },

    "design-thinking-workshop": {
      title: "Design Thinking Workshop",
      category: "WORKSHOP",
      date: "02 AUG 2026",
      time: "2:00 PM",
      location: "Seminar Hall",
      description:
        "Learn how to understand problems, generate ideas, and create innovative solutions using design thinking.",
    },

    "coding-club-meetup": {
      title: "Coding Club Meetup",
      category: "COMMUNITY",
      date: "08 AUG 2026",
      time: "4:30 PM",
      location: "Student Center",
      description:
        "Connect with fellow developers, share knowledge, and learn together as a coding community.",
    },
  };

  const event = events[eventId];

  if (!event) {
    return (
      <div className="event-details-page">

        <h1>
          Event not found
        </h1>

        <button
          className="primary-button"
          onClick={() => navigate("/events")}
        >
          ← Back to Events
        </button>

      </div>
    );
  }

  return (
    <div className="event-details-page">

      <button
        className="back-button"
        onClick={() => navigate("/events")}
      >
        ← Back to Events
      </button>


      <main className="event-details-card">

        <span className="event-category">
          {event.category}
        </span>


        <h1>
          {event.title}
        </h1>


        <p className="event-details-description">
          {event.description}
        </p>


        <div className="event-meta">

          <div>
            <span>DATE</span>
            <strong>{event.date}</strong>
          </div>


          <div>
            <span>TIME</span>
            <strong>{event.time}</strong>
          </div>


          <div>
            <span>LOCATION</span>
            <strong>{event.location}</strong>
          </div>

        </div>


        <button
          className="primary-button"
          onClick={() => alert("Event registration will be connected to the backend later.")}
        >
          Register for Event →
        </button>

      </main>

    </div>
  );
}

export default EventDetails;