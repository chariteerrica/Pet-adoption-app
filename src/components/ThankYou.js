import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your adoption application has been submitted. We'll review it and get back to you shortly.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
      >
        Return Home
      </Link>
    </div>
  );
}

export default ThankYou;
