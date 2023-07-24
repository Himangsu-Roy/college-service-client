import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch(`https://college-services-server-ashy.vercel.app/colleges`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
        setCollegesData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="mb-6 text-3xl font-bold text-center">Admission</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {collegesData.map((college) => (
          <div
            key={college._id}
            className="p-6 transition duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold">{college.name}</h3>
            <p className="text-gray-600">Admission Date: June 30, 2023</p>
            <p className="text-gray-600">Events: Lorem ipsum dolor sit amet.</p>
            <p className="text-gray-600">
              Research History: Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-5 text-gray-600">
              Sports: Lorem ipsum dolor sit amet.
            </p>
            <Link
              to={`/admission/${college._id}`}
              className="px-4 py-2 mt-6 text-white transition duration-300 bg-teal-600 rounded-md shadow-md hover:bg-teal-700">
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
