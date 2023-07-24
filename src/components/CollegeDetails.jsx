import React from "react";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  // Replace the following data with actual API fetched data
//   const collegeDetails = {
//     id: 1,
//     name: "ABC College",
//     image: "https://example.com/abc-college.jpg",
//     admissionDate: "2023-09-01",
//     rating: 4.5,
//     researchCount: 25,
//     sportsFacilities: ["Basketball", "Football", "Swimming"],
//     events: ["Annual Fest", "Tech Expo", "Cultural Night"],
//     admissionProcess: "Admission process details for ABC College.",
//     researchWorks: "Research work and achievements of ABC College.",
//     // Add more college details...
//   };

  const data = useLoaderData();
  console.log(data)

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col items-center">
        {data.map((collegeDetails) => (
          <>
            <img
              src={collegeDetails?.image}
              alt={collegeDetails?.name}
              className="w-40 h-40 object-cover mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">
              {collegeDetails?.name}
            </h2>
            <p className="mb-4">
              Admission Date: {collegeDetails?.admissionDate}
            </p>
            {/* Display more college information */}
            <p className="mb-4">Rating: {collegeDetails?.rating}</p>
            <p className="mb-4">
              Research Count: {collegeDetails?.researchCount}
            </p>
            <p className="mb-4">
              Sports Facilities: {collegeDetails?.sports?.join(", ")}
            </p>
            <p className="mb-4">Events: {collegeDetails?.events?.join(", ")}</p>
            <p className="mb-4">
              Admission Process: {collegeDetails?.admissionProcess}
            </p>
            <p className="mb-4">
              Research Works: {collegeDetails?.researchWorks}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default CollegeDetails;
