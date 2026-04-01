import React from "react";

export default function LandingPage() {
  const sections = ["Institutions", "Programs", "Courses", "Knowledge Units"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HERO */}
      <div className="text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Transfer Credit Match
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Explore how institutions, programs, courses, and knowledge units connect
          to support transfer credit mapping.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* SECTIONS */}
      <div className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section}
              className="bg-white border rounded-lg p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {section}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                Manage and organize {section.toLowerCase()}.
              </p>

              <div className="text-sm text-gray-400 border border-dashed rounded p-3 bg-gray-50">
                Preview: {section}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-6 text-sm text-gray-500 border-t">
        © 2026 Transfer Credit Match
      </div>
    </div>
  );
}

