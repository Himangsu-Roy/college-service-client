import { useContext, useEffect, useState } from "react";

import { imageUpload } from "../utils/imageUpload";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
  const data = useLoaderData();
  console.log(data);

  const { user } = useContext(AuthContext);

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

    fetch(`https://college-services-server-ashy.vercel.app/addUser`, {
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
      <h2 className="mb-6 text-3xl font-bold">Apply to College</h2>
      <form
        className="p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label>
            Candidate Name
            <input
              type="text"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-gray-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200"
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-gray-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200"
            />
          </label>
          <label>
            Candidate Email
            <input
              type="email"
              name="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-gray-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200"
            />
          </label>
          <label>
            Candidate Phone number
            <input
              type="tel"
              name="candidatePhone"
              value={formData.candidatePhone}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-gray-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200 "
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-gray-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200"
            />
          </label>
          <label>
            Date of Birth
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="block w-full h-10 mt-2 bg-white border-teal-300 rounded-md focus:border-teal-600 focus:ring focus:ring-teal-200"
            />
          </label>
          <label>
            Image
            <input
              accept="image/*"
              onChange={handleImageChange}
              type="file"
              className="block mt-2"
            />
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 mt-6 text-white transition duration-300 bg-teal-600 rounded-md shadow-md hover:bg-teal-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
