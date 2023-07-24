import { useEffect, useState } from "react";
import ExploreTopColleges from "../components/ExploreTopColleges";
import AdmissionProcess from "../components/AdmissionProcess";
import CollegeSearch from "../components/CollegeSearch";
import CollegeCard from "../components/CollegeCard";
import CollegeImageGallery from "../components/CollegeImageGallery";
import ResearchPapers from "../components/ResearchPapers";
import ReviewSection from "../components/ReviewSection";

const HomeLayout = () => {
  //   const colleges = [
  //     {
  //       id: 1,
  //       name: "Example College 1",
  //       image: "college1.jpg",
  //       admissionDates: "Admission Dates 1",
  //       events: "Events 1",
  //       research: "Research History 1",
  //       sports: "Sports 1",
  //     },
  //     {
  //       id: 2,
  //       name: "Example College 2",
  //       image: "college2.jpg",
  //       admissionDates: "Admission Dates 2",
  //       events: "Events 2",
  //       research: "Research History 2",
  //       sports: "Sports 2",
  //     },
  //     {
  //       id: 3,
  //       name: "Example College 3",
  //       image: "college3.jpg",
  //       admissionDates: "Admission Dates 3",
  //       events: "Events 3",
  //       research: "Research History 3",
  //       sports: "Sports 3",
  //     },
  //     // Add more college data here
  //   ];

  const collegeImages = [
    // Array of college graduate group pictures
    // Example: ['/path/to/image1.jpg', '/path/to/image2.jpg', ...]
  ];

  const researchLinks = [
    // Array of recommended research paper links

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
    // Add more review objects for this college if needed
  ];

  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/colleges`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
        setColleges(data);
        setSearchResults(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  }, []);

  console.log(colleges);

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
    <div>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our College Booking Facility
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            lectus eget risus bibendum aliquet ac a ex. Nullam rhoncus mauris
            non est rhoncus, eu convallis justo tincidunt.
          </p>
        </div>
      </section>
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CollegeSearch colleges={colleges} />
      </div> */}
      {/* Display college cards */}
      {/* College Card Section */}
      {/* <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div> */}
      <div className="mt-8 flex flex-col ">
        <input
          type="text"
          placeholder="Search for a college..."
          value={searchTerm}
          onChange={handleSearch}
          className="sm:w-5/12 md:w-2/4 lg:w-5/12 xl:w-4/12 mx-auto w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-indigo-500"
        />

        {/* Display college cards */}
        <div className="grid grid-cols-3 gap-6 mt-6 container mx-auto">
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


