import React, { useContext, useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm"; // Make sure to import the ReviewForm component correctly
import { AuthContext } from "../providers/AuthProvider";

const MyCollege = () => {
    const {user} = useContext(AuthContext)
  // State to keep track of reviews for each college
  const [collegeReviews, setCollegeReviews] = useState({});

  // Function to add a new review for a specific college
//   const addReview = (collegeId, review) => {
//     setCollegeReviews({
//       ...collegeReviews,
//       [collegeId]: [...(collegeReviews[collegeId] || []), review],
//     });
//   };



const addReview = (rating, comment) => {
//   setCollegeReviews({
//     ...collegeReviews,
//     [collegeId]: [...(collegeReviews[collegeId] || []), review],
//   });

setColleges([{...colleges, rating, comment}])



};

  console.log(collegeReviews)


const [colleges, setColleges] = useState([]);

useEffect(() => {
  fetch(`http://localhost:5000/mycollege/${user?.email}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server after form submission if needed
      console.log("Form submitted successfully:", data);
      setColleges(data);
      setCollegeReviews(data);
    })
    .catch((error) => {
      // Handle any errors that occurred during form submission
      console.error("Error submitting form:", error);
    });
}, []);

console.log(colleges)


  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">My Colleges</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <div key={college?._id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={college?.image}
                alt={college?.name}
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{college?.name}</h2>
                <p className="text-gray-500">
                  Admission Date: {college?.admissionDate}
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">Reviews:</h3>
            {/* {collegeReviews[college?._id] &&
            collegeReviews[college?._id].length > 0 ? (
              <ul>
                {collegeReviews[college?._id].map((review, index) => (
                  <li key={index} className="mb-2">
                    <p>Rating: {review?.rating}</p>
                    <p>Comment: {review?.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )} */}

            <ul>
              <li  className="mb-2">
                <p>Rating: {college?.rating}</p>
                <p>Comment: {college?.comment}</p>
              </li>
            </ul>

            <ReviewForm
              collegeId={college?._id}
              collegeName={college?.name}
              addReview={addReview}
              collegeReviews={collegeReviews}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;

