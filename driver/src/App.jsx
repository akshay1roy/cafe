import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import BookingList from "./components/BookingList";
import { DriverAppContext } from "./context/DriverContext";
import Sidebar from "./components/Sidebar";
import DriverDashboard from "./components/DriverDashboard";

function App() {
  const { dtoken } = useContext(DriverAppContext);

  return (
    <Router>
      <ToastContainer />
      {dtoken ? (
        <div>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<DriverDashboard />} />
                <Route path="/dashboard" element={<DriverDashboard />} />
                <Route path="/books" element={<BookingList />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;















// <Router>
// <ToastContainer />
// <Navbar />
// {isAuthenticated &&   }
// <Routes>
//   {/* If not authenticated, show login */}
//   <Route
//     path="/login"
//     element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
//   />

//   {/* If not authenticated, show register */}
//   <Route
//     path="/register"
//     element={
//       isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
//     }
//   />

//   <Route
//     path="/books"
//     element={
//       isAuthenticated ? <Navigate to="/books" /> : <BookingList/>
//     }
//   />

//   {/* If authenticated, show dashboard */}
//   <Route
//     path="/dashboard"
//     element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//   />

//   {/* Default redirect */}
//   <Route
//     path="*"
//     element={
//       isAuthenticated ? (
//         <Navigate to="/dashboard" />
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
// </Routes>
// </Router>
