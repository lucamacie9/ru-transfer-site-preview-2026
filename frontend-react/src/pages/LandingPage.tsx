import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <div className="text-center px-6 py-24 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Transfer Credit Match
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find out how your credits transfer to your next institution.
        </p>

        <div className="mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
            Start Matching
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-10"></div>

      {/* Featured Institutions */}
      <div id="institutions" className="px-6 py-16">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-12">
          Featured Institutions
        </h2>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              Harold Washington College
            </h3>
          </div>

          {/* Arrow */}
          <div className="text-gray-500 text-lg">
            Transfer to →
          </div>

          {/* Right */}
          <div className="text-center">
            <img
              src="/ru-logo.png"
              alt="Roosevelt University Logo"
              className="h-12 mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Roosevelt University
            </h3>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-sm text-gray-500 border-t">
        © 2026 Transfer Credit Match
      </div>
    </div>
  );
}

