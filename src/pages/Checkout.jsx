import React, { useState } from 'react';

const Checkout = () => {
  const [country, setCountry] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const countries = ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany'];

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 md:w-2/3">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Contact</h2>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-gray-400">Country/Region</span>
              <div className="relative inline-block">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="appearance-none rounded-md bg-gray-700 py-2 px-3 pr-8 text-white focus:outline-none"
                >
                  <option value="">Select a country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">Shipping address</h2>
          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="houseNumber"
                className="mr-2 h-4 w-4 rounded border border-gray-600 bg-gray-700 text-blue-500"
              />
              <label htmlFor="houseNumber" className="text-gray-400">
                Add a house number if you have one
              </label>
            </div>
          </div>
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="mt-2 w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
          />
          <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="City"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
            <div className="relative inline-block">
              <select
                className="appearance-none w-full rounded-md bg-gray-700 py-2 px-3 pr-8 text-white focus:outline-none"
              >
                <option value="">Select a state</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="ZIP code"
              className="w-full rounded-md border border-gray-600 bg-gray-700 py-2 px-3 text-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              checked={saveInfo}
              onChange={() => setSaveInfo(!saveInfo)}
              className="mr-2 h-4 w-4 rounded border border-gray-600 bg-gray-700 text-blue-500"
            />
            <label htmlFor="saveInfo" className="text-gray-400">
              Save this information for next time
            </label>
          </div>
          <button
            className="rounded-md bg-blue-500 py-2 px-4 text-white hover:bg-blue-600"
           
          >
            Continue to shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;