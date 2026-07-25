import { useNavigate } from "react-router-dom";
import "./App.css";

function Events() {
  const navigate = useNavigate();

  const events = [
    {
      id: "tech-symposium",
      date: "24",
      month: "JUL",
      title: "Tech Symposium 2026",
      description:
        "Explore the latest trends in technology and innovation.",
      category: "TECHNOLOGY",
    },

    {
      id: "campus-hackathon",
      date: "28",
      month: "JUL",
      title: "Campus Hackathon",
      description:
        "Build something amazing with your team.",
      category: "HACKATHON",
    },

    {
      id: "design-thinking-workshop",
      date: "02",
      month: "AUG",
      title: "Design Thinking Workshop",
      description:
        "Learn how to solve real-world problems creatively.",
      category: "WORKSHOP",
    },

    {
      id: "coding-club-meetup",
      date: "08",
      month: "AUG",
      title: "Coding Club Meetup",
      description:
        "Connect with fellow developers and learn together.",
      category: "COMMUNITY",
    },
  ];

  return (
    <div className="events-page">

      {/* HEADER */}

      <header className="events-header">

        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        <p className="eyebrow">
          CAMPUSFLOW / EVENTS
        </p>


        <h1>
          Discover what's
          <br />
          <span>happening.</span>
        </h1>


        <p className="events-description">
          Find events, workshops, hackathons, and opportunities
          happening around your campus.
        </p>

      </header>


      {/* EVENTS */}

      <main className="events-container">

        <div className="events-topbar">

          <h2>
            Upcoming Events
          </h2>


          <button
            className="primary-button"
            onClick={() => navigate("/create-event")}
          >
            + Create Event
          </button>

        </div>


        <div className="events-list">

          {events.map((event) => (

            <div
              className="event-card"
              key={event.id}
            >

              {/* DATE */}

              <div className="event-date-large">

                <strong>
                  {event.date}
                </strong>

                <span>
                  {event.month}
                </span>

              </div>


              {/* EVENT INFORMATION */}

              <div className="event-info">

                <span className="event-category">
                  {event.category}
                </span>


                <h3>
                  {event.title}
                </h3>


                <p>
                  {event.description}
                </p>

              </div>


              {/* VIEW DETAILS */}

              <button
                className="event-details-button"
                onClick={() =>
                  navigate(`/events/${event.id}`)
                }
              >
                View Details →
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Events;