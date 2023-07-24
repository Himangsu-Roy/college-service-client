import React from "react";

const ExploreTopColleges = () => {
  const colleges = [
    { id: 1, name: "College A", location: "City A" },
    { id: 2, name: "College B", location: "City B" },
    { id: 3, name: "College C", location: "City C" },
    // Add more colleges as needed
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Explore Top Colleges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
              <p className="text-gray-600">{college.location}</p>
              {/* Add more information about the college here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreTopColleges;
