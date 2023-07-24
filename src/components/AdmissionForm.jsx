import { useContext, useEffect, useState } from "react";

import { imageUpload } from "../utils/imageUpload";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {

    const data = useLoaderData();
    console.log(data)

    const {user} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    candidateName: user?.displayName,
    collegeImage: data[0]?.image,
    name: data[0]?.name,
    admissionDate: data[0]?.admissionDate,
    subject: "",
    candidateEmail: "",
    candidatePhone: "",
    address: "",
    dateOfBirth: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    imageUpload(file).then((data) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: data.data.display_url,
      }));
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Apply to College</h2>
      <form
        className="bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label>
            Candidate Name
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Candidate Email
            <input
              type="email"
              name="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Candidate Phone number
            <input
              type="tel"
              name="candidatePhone"
              value={formData.candidatePhone}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Date of Birth
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200 h-10"
            />
          </label>
          <label>
            Image
            <input
              accept="image/*"
              onChange={handleImageChange}
              type="file"
              className="block mt-2 "
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 mt-6 rounded-md shadow-md hover:bg-teal-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;

// /mycollege/${collegeId}

// ${import.meta.env.VITE_API_URL}
