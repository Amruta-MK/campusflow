import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || "Unable to load profile");
          return;
        }

        setUser(data);
      } catch (error) {
        console.error(error);
        alert("Cannot connect to server");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const formData = new FormData();

    formData.append("profileImage", file);

    try {
      setUploading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/profile/image",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Image upload failed");
        return;
      }

      setUser((previousUser) => ({
        ...previousUser,
        profileImage: data.profileImage,
      }));

      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload profile picture");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="project-details-page">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="project-details-page">
        <h1>Profile not found</h1>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <button
        className="back-button"
        onClick={() => navigate("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <main className="project-details-card">
        <p className="eyebrow">MY PROFILE</p>

        <div className="profile-avatar-container">
          <div className="profile-avatar">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="profile-avatar-image"
              />
            ) : (
              user.name?.charAt(0).toUpperCase()
            )}
          </div>

          <button
            type="button"
            className="profile-image-button"
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
          >
            {uploading ? "..." : "+"}
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        <h1>{user.name}</h1>

        <p className="project-details-description">
          Student Profile
        </p>

        <div className="profile-info">
          <div className="profile-info-item">
            <span>FULL NAME</span>

            <strong>{user.name}</strong>
          </div>

          <div className="profile-info-item">
            <span>EMAIL</span>

            <strong>{user.email}</strong>
          </div>
        </div>

        <button
          className="join-project-button"
          onClick={() => navigate("/projects")}
        >
          Explore Projects →
        </button>
      </main>
    </div>
  );
}

export default Profile;