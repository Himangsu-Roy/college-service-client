import React from "react";

const CollegeImageGallery = ({ collegeImages }) => {
  return (
    <div className="mt-8 container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        College Graduate's Group Pictures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`College Graduate ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeImageGallery;
