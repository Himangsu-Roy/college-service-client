import React from "react";
import notFoundImage from "../../public/00760972-0282-4ec7-b155-6fc5e1a50f06.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-6">404</h1>
      <p className="text-white text-xl mb-6">Oops! Page not found.</p>
      <img src={notFoundImage} alt="404 Not Found" className="w-96" />
      <Link to="/">
        <button className="mt-8 py-3 px-6 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
