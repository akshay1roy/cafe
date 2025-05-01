import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/Services";

import Footer from "./pages/footer";
import UserBooksCafe from "./pages/UserBooksCafe";
// import services from './pages/services'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mybooking" element={<UserBooksCafe/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
