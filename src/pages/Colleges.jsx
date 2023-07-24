import React, { useEffect, useState } from "react";
import CollegesCard from "../components/CollegesCard";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Loader";
import { useContext } from "react";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const {user, loading} = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://college-services-server-ashy.vercel.app/colleges`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
        setColleges(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  }, []);
  
  
  if(!user) {
    <Loader/>
  }

  return (
    <div>
      <h2 className="my-6 text-3xl font-bold text-center">Colleges</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {colleges.map((college) => (
          <CollegesCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
