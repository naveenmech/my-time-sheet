import React from "react";

function personalDetails() {
  return (
    <>
      <div className="p-4 md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-2xl font-medium mb-4">Personal Details</h2>

        <div className="mb-4">
          <label htmlFor="name" className="text-gray-600 mb-2 block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dob" className="text-gray-600 mb-2 block">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="text-gray-600 mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="text-gray-600 mb-2 block">
            Address
          </label>
          <textarea
            id="address"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="text-gray-600 mb-2 block">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default personalDetails;
