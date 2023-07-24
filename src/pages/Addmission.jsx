import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Admission = () => {

  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/colleges`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server after form submission if needed
        console.log("Form submitted successfully:", data);
        setCollegesData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during form submission
        console.error("Error submitting form:", error);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Admission</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collegesData.map((college) => (
          <div
            key={college._id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{college.name}</h3>
            <p className="text-gray-600">Admission Date: June 30, 2023</p>
            <p className="text-gray-600">Events: Lorem ipsum dolor sit amet.</p>
            <p className="text-gray-600">
              Research History: Lorem ipsum dolor sit amet.
            </p>
            <p className="text-gray-600">Sports: Lorem ipsum dolor sit amet.</p>
            <Link
              to={`/admission/${college._id}`}
              className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-teal-700 transition duration-300">
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;

// import React, { useState } from "react";

// const collegesData = [
//   { id: 1, name: "College A" },
//   { id: 2, name: "College B" },
//   { id: 3, name: "College C" },
//   // Add more colleges as needed
// ];

// const Admission = () => {
//   const [selectedCollege, setSelectedCollege] = useState(null);

//   const handleCollegeClick = (collegeId) => {
//     setSelectedCollege(collegeId);
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6">Admission</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {collegesData.map((college) => (
//           <div
//             key={college.id}
//             className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition duration-300 hover:shadow-lg"
//             onClick={() => handleCollegeClick(college.id)}>
//             <h3 className="text-xl font-bold mb-2">{college.name}</h3>
//             <p className="text-gray-600">Admission Date: June 30, 2023</p>
//             <p className="text-gray-600">Events: Lorem ipsum dolor sit amet.</p>
//             <p className="text-gray-600">
//               Research History: Lorem ipsum dolor sit amet.
//             </p>
//             <p className="text-gray-600">Sports: Lorem ipsum dolor sit amet.</p>
//             <button className="bg-teal-600 text-white px-4 py-2 mt-4 rounded-md shadow-md hover:bg-teal-700 transition duration-300">
//               Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {selectedCollege && (
//         <div className="mt-8">
//           <h3 className="text-2xl font-bold mb-4">
//             Apply to{" "}
//             {
//               collegesData.find((college) => college.id === selectedCollege)
//                 .name
//             }
//           </h3>
//           <form className="bg-white rounded-lg shadow-md p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <label>
//                 Candidate Name
//                 <input
//                   type="text"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Subject
//                 <input
//                   type="text"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Candidate Email
//                 <input
//                   type="email"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Candidate Phone number
//                 <input
//                   type="tel"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Address
//                 <input
//                   type="text"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Date of Birth
//                 <input
//                   type="date"
//                   className="block w-full mt-2 rounded-md border-gray-300 focus:border-teal-600 focus:ring focus:ring-teal-200"
//                 />
//               </label>
//               <label>
//                 Image
//                 <input type="file" className="block mt-2" />
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="bg-teal-600 text-white px-4 py-2 mt-6 rounded-md shadow-md hover:bg-teal-700 transition duration-300">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Admission;

// import React, { useState } from "react";

// // Define a custom component for the admission form
// function AdmissionForm() {
//   // Define some state variables for the input fields
//   const [name, setName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [image, setImage] = useState(null);

//   // Define a function to handle the submit button
//   function handleSubmit(e) {
//     // Prevent the default browser behavior
//     e.preventDefault();
//     // Validate the input fields
//     if (
//       name &&
//       subject &&
//       email &&
//       phone &&
//       address &&
//       dateOfBirth &&
//       image
//     ) {
//       // Create a new FormData object to store the input data
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("subject", subject);
//       formData.append("email", email);
//       formData.append("phone", phone);
//       formData.append("address", address);
//       formData.append("dateOfBirth", dateOfBirth);
//       formData.append("image", image);

//       // Send the form data to the server or API
//       fetch("/api/admission", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Show some feedback for the submit button
//           alert(data.message);
//         })
//         .catch((error) => {
//           // Show some feedback for the submit button
//           alert(error.message);
//         });
//     } else {
//       // Show some feedback for the submit button
//       alert("Please fill all the fields");
//     }
//   }

//   return (
//     // Use a form element to wrap the input fields and the button
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
//       {/* Add a heading for the component */}
//       <h1 className="text-3xl font-bold text-center mb-4">Admission Form</h1>
//       {/* Add some input fields with labels */}
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//           Candidate Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
//           Subject
//         </label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//           placeholder="Enter your subject"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//           Candidate Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
//           Candidate Phone Number
//         </label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//           placeholder="Enter your phone number"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
//           Address
//         </label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//           placeholder="Enter your address"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-2">
//           Date of Birth
//         </label>
//         <input
//           type="date"
//           id="dateOfBirth"
//           name="dateOfBirth"
//           value={dateOfBirth}
//           onChange={(e) => setDateOfBirth(e.target.value)}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
//           Image
//         </label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp,.svg,.ico,.cur,.ani,.apng,.avif,.flif,.jxl,.mng,.pam,.pbm,.pgm,.ppm,.tga,.xcf,.xpm,.xwd"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="border border-gray-300 rounded-lg px-4 py-2 w-full"
//         />
//       </div>
//       {/* Add a submit button */}
//       <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default AdmissionForm;
