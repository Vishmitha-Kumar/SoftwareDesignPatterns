import React, { useState } from 'react';
import { Button } from '../ui/button';

const RequestQuote = ({ handleCloseSheet, handleSubmit, showSheet }) => {
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  return (
    <div className={`fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out ${showSheet ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-white p-6 rounded-t-lg shadow-lg w-full max-w-md overflow-y-auto max-h-full">
        <h2 className="text-xl font-bold mb-4 text-black">Event Details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Occasion</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={selectedOccasion}
              onChange={handleOccasionChange}
              required
            >
              <option value="">Select Occasion</option>
              <option>Wedding</option>
              <option>Party</option>
              <option>Conference</option>
              <option>Other</option>
            </select>
            {selectedOccasion === 'Other' && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Please specify</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  placeholder="Enter the type of occasion"
                  required
                />
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">From Time/Date</label>
            <input
              type="datetime-local"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">To Time/Date</label>
            <input
              type="datetime-local"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="e.g., +91 xxxxxxxxxx"
              pattern="^\+?[1-9]\d{1,14}$"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Budget Range</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              placeholder="e.g., $5000 - $10000"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Preferences</label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              rows="3"
              placeholder="Describe any specific food preferences"
            ></textarea>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleCloseSheet}
              className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestQuote;
