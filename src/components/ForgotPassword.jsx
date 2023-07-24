// import React, { useState } from "react";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can trigger the password reset process using the entered email
//     // For example, you can send a request to your backend API to initiate the password reset
//     console.log("Forgot Password email submitted:", email);
//     // You can also display a success message to the user after submitting the email
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can trigger the password reset process using the entered email
    // For example, you can send a request to your backend API to initiate the password reset
    console.log("Forgot Password email submitted:", email);
    // You can also display a success message to the user after submitting the email
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Forgot Password
        </h2>
        {submitted ? (
          <div className="text-center text-green-500 mb-4">
            An email has been sent to {email} with instructions to reset your
            password.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
