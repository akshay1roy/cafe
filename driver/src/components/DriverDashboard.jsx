import React, {  useContext } from 'react';
import { DriverAppContext } from '../context/DriverContext';
// import axios from 'axios';

export default function Dashboard() {
  const { driver } = useContext(DriverAppContext);
//   const [driver, setDriver] = useState(null);

  

  if (!driver) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading driver details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🚀 Driver Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm">
          <div>
            <p className="font-medium">👤 Name:</p>
            <p>{driver.name}</p>
          </div>
          <div>
            <p className="font-medium">📧 Email:</p>
            <p>{driver.email}</p>
          </div>
          <div>
            <p className="font-medium">📱 Phone:</p>
            <p>{driver.phone || 'N/A'}</p>
          </div>
          <div>
            <p className="font-medium">🚗 Vehicle:</p>
            <p>{driver.vehicle || 'N/A'}</p>
          </div>
          <div>
            <p className="font-medium">📌 Status:</p>
            <span className={`inline-block mt-1 px-3 py-1 rounded-full text-white text-xs ${
              driver.status === 'available' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {driver.status}
            </span>
          </div>
          <div>
            <p className="font-medium">📦 Total Bookings Assigned:</p>
            <p>{driver.bookingsAssigned?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
