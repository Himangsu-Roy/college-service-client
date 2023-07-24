import React, { useState } from "react";
import CollegeCard from "./CollegeCard";


const CollegeSearch = ({ colleges }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the colleges based on the search term
    const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredColleges);
  };

  return (
    <div className="mt-8 flex flex-col ">
      <input
        type="text"
        placeholder="Search for a college..."
        value={searchTerm}
        onChange={handleSearch}
        className="sm:w-5/12 md:w-2/4 lg:w-5/12 xl:w-4/12 mx-auto w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
      />

      {/* Display college cards */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {searchResults.map((college) => (
          <CollegeCard college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSearch;
