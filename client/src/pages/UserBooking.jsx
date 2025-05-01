import React, { useContext, useState } from "react";
import { CafeAppContext } from "../context/CafeAppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import mycar from "../assets/mycar.png";
import location_icon from "../assets/location-icon.png";

const cities = [
  { id: 1, name: "New York" },
  { id: 2, name: "Los Angeles" },
  { id: 3, name: "Chicago" },
  { id: 4, name: "Houston" },
  { id: 5, name: "Phoenix" },
  { id: 6, name: "Philadelphia" },
  { id: 7, name: "San Antonio" },
  { id: 8, name: "San Diego" },
  { id: 9, name: "Dallas" },
  { id: 10, name: "San Jose" },
];

export default function UserBooking() {
  const { backendUrl, token } = useContext(CafeAppContext);
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [availableCafes, setAvailableCafes] = useState([]);

  const now = new Date();
  const formattedDate = now.toISOString().split("T")[0];
  const formattedTime = now.toTimeString().slice(0, 5);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    destination: "",
    date: formattedDate,
    time: formattedTime,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "destination" && value) {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const fetchAvailableCafe = async () => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/driver/cafe-available`,
        formData
      );
      setAvailableCafes(data.availableCafes || []);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching cafes.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { pickupLocation, destination } = formData;

    if (!pickupLocation || !destination) {
      toast.warn("Please fill in both pickup location and destination", {
        className: "bg-yellow-500 text-white font-medium rounded shadow",
      });
      return;
    }

    if (!token) {
      toast.warn("Please login to continue!", {
        className: "bg-yellow-500 text-white font-medium rounded shadow",
      });
      navigate("/login");
      return;
    }

    await fetchAvailableCafe();
    setShowSuggestions(false);
  };

  const handleBook = async (cafe) => {
    const id = cafe._id;

    // console.log({
    //   driverId: id,
    //   pickupLocation: formData.pickupLocation,
    //   destination: formData.destination,
    //   date: formData.date,
    //   time: formData.time,
    // });

    try {
      const response = await axios.post(
        `${backendUrl}/api/book/book-cafe`,
        {
          driverId: id,
          pickupLocation: formData.pickupLocation,
          destination: formData.destination,
          date: formData.date,
          time: formData.time,
        },
        {
          headers: { token },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Booking successful!", {
          className: "bg-green-500 text-white font-medium rounded shadow",
        });
        navigate("/mybooking");
      }
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Failed to book cafe. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          User Booking
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pickupLocation" className="block text-gray-600">
              From
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter starting location"
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-gray-600">
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter destination location"
            />
            {showSuggestions && (
              <ul className="mt-2 max-h-40 overflow-y-auto border border-gray-300 rounded-lg bg-white shadow-md">
                {suggestions.map((city) => (
                  <li
                    key={city.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        destination: city.name,
                      }));
                      setShowSuggestions(false);
                    }}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      {availableCafes.length > 0 && (
        <div className="w-full max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <img src={location_icon} alt="Location" className="w-6 h-6" />
            Available Cafes in {formData.destination}
          </h3>
          <ul className="space-y-4">
            {availableCafes.map((cafe) => (
              <li
                key={cafe._id}
                className="relative border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="absolute top-2 right-4 text-green-600 font-semibold text-sm">
                  ✓ Available
                </span>

                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold text-gray-800">
                    {cafe.name}
                  </h4>
                  <img
                    src={mycar}
                    alt="Car Icon"
                    className="w-10 h-10 object-contain"
                  />
                  <span>
                    Price:{" "}
                    <span className="text-green-700 font-bold mt-2">50Rs</span>
                  </span>
                </div>

                <p className="text-gray-600">{cafe.location}</p>

                <button
                  onClick={() => handleBook(cafe)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-2xl text-sm font-medium transition"
                >
                  Book Now
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
