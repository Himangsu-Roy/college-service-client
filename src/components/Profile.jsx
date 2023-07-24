import React, { useContext, useEffect, useState } from "react";
import ProfileEditForm from "../components/ProfileEditForm";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://college-services-server-ashy.vercel.app/mycollege/${user.email}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
        setUserDetails(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  });

  const [userProfileData, setUserProfileData] = useState({
    name: user?.name,
    email: user?.email,
    university: "ABC University",
    address: "123 Main Street, City, Country",
  });

  const handleSaveProfile = (updatedProfile) => {
    // Implement API call to update the user profile data on the server

    setUserProfileData(updatedProfile);
    setEditing(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="p-4 bg-white rounded-lg shadow">
        {editing ? (
          // Show edit form when editing is true
          <ProfileEditForm
            profileData={userProfileData}
            onSave={handleSaveProfile}
          />
        ) : (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Profile Name</h2>
              <p className="text-gray-700">{userProfileData.name}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Email</h2>
              <p className="text-gray-700">{userProfileData.email}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">University</h2>
              <p className="text-gray-700">{userProfileData.university}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Address</h2>
              <p className="text-gray-700">{userProfileData.address}</p>
            </div>
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 text-white bg-teal-500 rounded afont-bold">
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
