import React, { useEffect, useState } from "react";

const ReviewForm = ({ collegeId, collegeName, addReview, collegeReviews }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    // addReview(collegeId, { rating, comment });
    addReview(rating, comment);


    fetch(`http://localhost:5000/review/${collegeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
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

    setRating("");
    setComment("");
  };

  const review = {
    rating,
    comment,
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h3 key={collegeName?._id} className="text-lg font-semibold mb-2">
        Write a Review for {collegeName?.name}
      </h3>
      <label>
        Rating:
        {/* <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        /> */}
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border rounded py-2 px-3">
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label>
        Comment:
        {/* <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        /> */}
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded py-2 px-3"
          rows="4"
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
