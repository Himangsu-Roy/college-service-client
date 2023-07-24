import React from "react";
import { Link } from "react-router-dom";

const CollegesCard = ({ college }) => {
  const { _id, name, image, rating, admissionDate, researchCount } = college;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Rating: {rating}</p>
      <p className="text-gray-600 mb-2">Admission Date: {admissionDate}</p>
      <p className="text-gray-600 mb-2">Research Count: {researchCount}</p>
      <Link
        to={`/college/${_id}`}
        className="text-teal-600 font-semibold hover:text-teal-700 transition duration-300">
        Details
      </Link>
    </div>
  );
};

export default CollegesCard;

