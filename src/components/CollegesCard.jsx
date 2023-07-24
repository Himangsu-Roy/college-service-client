import React from "react";
import { Link } from "react-router-dom";

const CollegesCard = ({ college }) => {
  const { _id, name, image, rating, admissionDate, researchCount } = college;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      
      
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-40 mb-4 rounded-md"
      />
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{name}</h2>
      <p className="mb-2 text-gray-600">Rating: {rating}</p>
      <p className="mb-2 text-gray-600">Admission Date: {admissionDate}</p>
      <p className="mb-2 text-gray-600">Research Count: {researchCount}</p>
      <Link
        to={`/college/${_id}`}
        className="font-semibold text-teal-600 transition duration-300 hover:text-teal-700">
        Details
      </Link>
    </div>
  );
};

export default CollegesCard;

