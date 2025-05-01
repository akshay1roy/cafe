import React, { createContext, useState } from 'react';


 export  const CafeAppContext = createContext();

export const CafeAppContextProvider = ({ children }) => {

  const backendUrl= import.meta.env.VITE_BACKEND_URL 

  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken && storedToken !== "undefined" && storedToken !== "false"
      ? storedToken
      : "";
  });

  
  // const [cafe, setCafe] = useState([]);
  // const [token,setToken]=useState();



  const value={
    backendUrl,
    token,
    setToken
  }




 

  return (
    <CafeAppContext.Provider value={value}>
      {children}
    </CafeAppContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
export default CafeAppContextProvider
