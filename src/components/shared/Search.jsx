import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, type, fromDate, toDate });
  };

  return (
    <div className="flex justify-end">
      <form onSubmit={handleSearch} className="w-full max-w-4xl">
        <div className="p-4 bg-white rounded shadow-lg flex flex-col md:flex-row gap-6 ml-6 mr-6">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          >
            <option value="">Select Location</option>
            <option value="location1">Chennai</option>
            <option value="location2">Coimbatore</option>
            <option value="location3">Cuddalore</option>
            <option value="location3">Dharmapuri</option>
            <option value="location3">Erode</option>
            <option value="location3">Kanchipuram</option>
            <option value="location3">Kanyakumari</option>
            <option value="location3">Karur</option>
            <option value="location3">Krishnagiri</option>
            <option value="location3">Madurai</option>
            <option value="location3">Nagapattinam</option>
            <option value="location3">Namakkal</option>
            <option value="location3">Perambalur</option>
            <option value="location3">Pudukkottai</option>
            <option value="location3">Ramanathapuram</option>
            <option value="location3">Salem</option>
            <option value="location3">Sivagangai</option>
            <option value="location3">Thanjavur</option>
            <option value="location3">Theni</option>
            <option value="location3">Thoothukudi</option>
            <option value="location3">Trichy</option>
            <option value="location3">Tirunelveli</option>
            <option value="location3">Tirupur</option>
            <option value="location3">Tiruvallur</option>
            <option value="location3">Tiruvannamalai</option>
            <option value="location3">Vellore</option>
            <option value="location3">Viluppuram</option>
            <option value="location3">Virudhunagar</option>
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border border-gray-300 rounded text-black"
          >
            <option value="">Select Type</option>
            <option value="wedding">Wedding</option>
            <option value="conference">Conference</option>
            <option value="party">Party</option>
          </select>
          <div className="flex items-center">
            <label htmlFor="fromDate" className="mr-2 text-black font-semibold">From:</label>
            <input
              id="fromDate"
              placeholder="From date"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="toDate" className="mr-2 text-black font-semibold">To:</label>
            <input
              id="toDate"
              type="date"
              placeholder="To date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded items-center ml-auto">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
