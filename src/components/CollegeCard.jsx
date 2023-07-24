import { useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {

    console.log(college)

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 ">
      {/* College Image */}
      <img
        src={college?.image}
        alt={college?.name}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />

      {/* College Name */}
      <h2 className="text-lg font-semibold mb-2">{college?.name}</h2>

      {/* Admission Dates */}
      <p className="text-gray-600 mb-2">
        Admission Dates: {college?.admissionDates}
      </p>

      {/* Events */}
      <p className="text-gray-600 mb-2">Events: {college?.events}</p>

      {/* Research History */}
      <p className="text-gray-600 mb-2">
        Research History: {college?.researchHistory}
      </p>

      {/* Sports */}
      <p className="text-gray-600">Sports: {college?.sports.join(", ")}</p>

      {/* Details Button */}
      <Link
        to={`/college/${college?._id}`}
        className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500">
        Details
      </Link>
    </div>
  );
};

export default CollegeCard;
