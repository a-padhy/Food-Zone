import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md bg-white p-8 shadow-md rounded-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! Error Page
        </h1>
        <p className="text-gray-700 mb-4">
          Incorrect page visited. Please return back to home.
        </p>
        <Link
          to="/"
          className="text-blue-500 underline hover:text-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
