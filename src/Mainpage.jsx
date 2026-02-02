import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AreaDetails from "./box1/AreaDetails";
import Navb from "./box1/nav";
// import PlaceDetails from "./lastplacedetails";
import AboutUs from "./AboutUs";
import ContactUs from "./Contact";
import Signup from "./box1/SignupFrom";
import Login from "./login";
import Placedetails from "./box1/PlaceDetails";
import BookingPage from "./box1/details";

const Mainpage = () => {
  return (
    <Router>
      <Routes>
        {/* Home/Landing Page */}
        <Route path="/" element={<Navb />} />
        <Route path="/home" element={<Navb />} />

        {/* ✅ FIXED: Changed from /area/:areaName to /places/:areaName to match navigation */}
        <Route path="/places/:areaName" element={<AreaDetails />} />
        <Route path="/area/:areaName" element={<AreaDetails />} />

        <Route path="/place-details" element={<Placedetails />} />

        {/* Other Pages */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Booking Page */}
        <Route path="/booking" element={<BookingPage />} />

        {/* 404 - Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Simple 404 Component
const NotFound = () => (
  <div
    style={{ textAlign: "center", padding: "100px 20px", marginTop: "80px" }}
  >
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a
      href="/home"
      style={{ color: "#0d6efd", textDecoration: "none", fontSize: "1.1rem" }}
    >
      Go Back to Home
    </a>
  </div>
);

export default Mainpage;
