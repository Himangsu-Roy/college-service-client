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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-lg py-2 px-3 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border rounded-lg py-2 px-3 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="university">
          University
        </label>
        <input
          type="text"
          id="university"
          className="border rounded-lg py-2 px-3 w-full"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="border rounded-lg py-2 px-3 w-full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
    </form>
  );
};

export default ProfileEditForm;
