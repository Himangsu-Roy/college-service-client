import React, { useState } from "react";

const ProfileEditForm = ({ profileData, onSave }) => {
  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  const [university, setUniversity] = useState(profileData.university);
  const [address, setAddress] = useState(profileData.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedProfile = {
      ...profileData,
      name,
      email,
      university,
      address,
    };

    onSave(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 bg-white border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-white border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 font-bold text-gray-700"
          htmlFor="university">
          University
        </label>
        <input
          type="text"
          id="university"
          className="w-full px-3 py-2 bg-white border rounded-lg"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="w-full px-3 py-2 bg-white border rounded-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-teal-600 rounded">
        Save
      </button>
    </form>
  );
};

export default ProfileEditForm;
