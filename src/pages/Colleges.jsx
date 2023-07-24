import React, { useEffect, useState } from "react";
import CollegesCard from "../components/CollegesCard";

const Colleges = () => {

// const colleges = [
//   {
//     id: 1,
//     name: "ABC College",
//     image: "https://example.com/abc-college.jpg",
//     rating: 4.5,
//     admissionDate: "2023-09-01",
//     researchCount: 25,
//     events: [
//       {
//         id: 101,
//         name: "Annual Fest",
//         date: "2023-11-15",
//       },
//       // Add more events as needed
//     ],
//     sports: [
//       {
//         id: 201,
//         name: "Football",
//         facilities: "Football field, equipment",
//       },
//       // Add more sports as needed
//     ],
//     reviews: [
//       {
//         id: 301,
//         reviewer: "John Doe",
//         comment: "Great college with excellent facilities.",
//         rating: 5,
//       },
//       // Add more reviews as needed
//     ],
//   },
//   {
//     id: 2,
//     name: "XYZ College",
//     image: "https://example.com/xyz-college.jpg",
//     rating: 4.2,
//     admissionDate: "2023-10-01",
//     researchCount: 30,
//     events: [
//       {
//         id: 102,
//         name: "Tech Fest",
//         date: "2023-12-10",
//       },
//       // Add more events as needed
//     ],
//     sports: [
//       {
//         id: 202,
//         name: "Basketball",
//         facilities: "Indoor basketball court",
//       },
//       // Add more sports as needed
//     ],
//     reviews: [
//       {
//         id: 302,
//         reviewer: "Jane Smith",
//         comment: "Good college with helpful faculty.",
//         rating: 4,
//       },
//       // Add more reviews as needed
//     ],
//   },
//   // Add more colleges as needed
// ];

const [colleges, setColleges] = useState([]);

useEffect(() => {
  fetch(`http://localhost:5000/colleges`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server after form submission if needed
      console.log("Form submitted successfully:", data);
      setColleges(data);
      
    })
    .catch((error) => {
      // Handle any errors that occurred during form submission
      console.error("Error submitting form:", error);
    });
}, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {colleges.map((college) => (
        <CollegesCard key={college._id} college={college} />
      ))}
    </div>
  );
};

export default Colleges;
