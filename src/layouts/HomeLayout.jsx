import { useEffect, useState } from "react";
import ExploreTopColleges from "../components/ExploreTopColleges";
import AdmissionProcess from "../components/AdmissionProcess";
import CollegeSearch from "../components/CollegeSearch";
import CollegeCard from "../components/CollegeCard";
import CollegeImageGallery from "../components/CollegeImageGallery";
import ResearchPapers from "../components/ResearchPapers";
import ReviewSection from "../components/ReviewSection";

const HomeLayout = () => {
  const collegeImages = ["/path/to/image1.jpg", "/path/to/image2.jpg"];

  const researchLinks = [
    { title: "Research Paper 1", url: "https://example.com/paper1.pdf" },
    { title: "Research Paper 2", url: "https://example.com/paper2.pdf" },
  ];

  const reviews = [
    {
      id: 1,
      user: "John Doe",
      date: "July 12, 2023",
      comment:
        "Great college with excellent facilities and supportive faculty!",
    },
    {
      id: 2,
      user: "Jane Smith",
      date: "July 20, 2023",
      comment: "I had an amazing experience here. The campus is beautiful!",
    },
  ];

  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://college-services-server-ashy.vercel.app/colleges`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setColleges(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }, []);

  console.log(colleges);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredColleges);
  };

  return (
    <div>
      <section className="py-24 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-2xl font-semibold">
            Welcome to Our College Booking Facility
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            lectus eget risus bibendum aliquet ac a ex. Nullam rhoncus mauris
            non est rhoncus, eu convallis justo tincidunt.
          </p>
        </div>
      </section>
    
      <div className="flex flex-col mt-8 ">
        <input
          type="text"
          placeholder="Search for a college..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 mx-auto bg-white border border-gray-300 rounded-lg sm:w-5/12 md:w-2/4 lg:w-5/12 xl:w-4/12 focus:outline-none focus:ring focus:border-indigo-500"
        />

        {/* Display college cards */}
        <div className="grid grid-cols-1 gap-6 mx-auto mt-6 md:grid-cols-3">
          {searchResults.slice(0, 3).map((college, idx) => (
            <CollegeCard key={idx} college={college} />
          ))}
        </div>
      </div>
      {/*  */}
      <CollegeImageGallery collegeImages={collegeImages} />
      {/* Research Papers Section */}
      <ResearchPapers researchLinks={researchLinks} />
      {/* Review Section */}
      <ReviewSection reviews={reviews} /> {/* Pass the relevant college data */}
      <ExploreTopColleges />
      <AdmissionProcess />
    </div>
  );
};

export default HomeLayout;
