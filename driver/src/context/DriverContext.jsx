import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import toast from 'react-toastify'
// Create the context
export const DriverAppContext = createContext();

export const DriverAppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [dtoken, setDtoken] = useState(() => localStorage.getItem("dtoken") || "");
  const [driver,setDriver]=useState()
  const [bookings,SetBookings]=useState([])


  const fetchDriverDetails = async () => {
    try {
      // console.log(dtoken);

      const response = await axios.get(`${backendUrl}/api/driver/profile`, {
        headers: {
          dtoken,
        },
      });
      // console.log(response.data.driver.name);
      setDriver(response.data.driver);
    } catch (error) {
      console.log('Error fetching driver details:', error);
    }
  };

  useEffect(() => {
    if (dtoken) {
      fetchDriverDetails();
    }
  }, [dtoken]);
 


 // Keep token updated in localStorage if it changes
 useEffect(() => {
  if (dtoken) {
    localStorage.setItem("dtoken", dtoken);
  } else {
    localStorage.removeItem("dtoken");
  }
}, [dtoken]);




  // useEffect(() => {
  //   if (dtoken) {
  //     fetchDriverDetails();
  //   }
  // }, [dtoken]);

  const value = {
    backendUrl,
    dtoken,
    setDtoken,
    driver,
    bookings
  };

  return (
    <DriverAppContext.Provider value={value}>
      {children}
    </DriverAppContext.Provider>
  );
};

export default DriverAppContextProvider;
