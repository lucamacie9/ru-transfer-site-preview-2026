import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white border-b font-sans">
        <h1 className="text-lg font-semibold">Transfer Credit Match</h1>
        <div className="space-x-4 text-sm">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#match">Match</a>
          <a href="#director">Director View</a>
          <a href="#institutions">Institutions</a>
          <a href="#programs">Programs</a>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 border">Login</button>
          <button className="px-3 py-1 border">Register</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 py-16 bg-white font-sans">
        <h1 className="text-3xl font-bold mb-3">Transfer Credit Match</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Match your courses and see how they transfer between schools.
        </p>
        <div className="mt-4">
          <button className="px-4 py-2 border mr-2">Start Matching</button>
          <button className="px-4 py-2 border">View Institutions</button>
        </div>
      </div>

      {/* Featured Institutions */}
      <div id="institutions" className="px-6 py-10 font-sans">
        <h2 className="text-xl font-semibold mb-5 text-center">
          Featured Transfer Pathway
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Harold Washington */}
          <div className="bg-white p-4 border w-full md:w-1/3 text-center">
            <h3 className="font-semibold">Harold Washington College</h3>
            <p className="text-sm text-gray-600 mt-2">
              Starting point for completing general education courses.
            </p>
          </div>

          <div className="text-gray-500">→</div>

          {/* Roosevelt */}
          <div className="bg-white p-4 border w-full md:w-1/3 text-center">
            <img
              src="/ru-logo.png"
              alt="Roosevelt University Logo"
              className="mx-auto mb-2 h-10"
            />
            <h3 className="font-semibold">Roosevelt University</h3>
            <p className="text-sm text-gray-600 mt-2">
              Transfer here to complete your degree program.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-sm text-gray-500 font-sans">
        © 2026 Transfer Credit Match
      </div>
    </div>
  )
}

