import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "./box1/images/Logo.jpg"; // Ensure you have this image

import "./Aboutus.css";

const AboutUs = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter an area name to search");
      return;
    }
    navigate(`/search/${search.trim().toLowerCase()}`);
  };

  // ✅ Define function for handling place selection
  const handlePlaceClick = (place) => {
    navigate(`/places/${place.toLowerCase()}`);
  };

  return (
    <>
      {/* Navbar at the Top */}
      <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top custom-navbar">
        <Container>
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "50px", width: "50px", borderRadius: "25px" }}
              className="me-2"
            />
            <span>Box Cricket</span>
          </Navbar.Brand>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="/aboutus" className="mx-2">About Us</Nav.Link>
              <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>
              {/* <Nav.Link href="/login" className="mx-2 d">Login</Nav.Link> */}

              <Nav.Link href="/login" className="mx-2 d-flex align-items-center">
                
                
                Login
              </Nav.Link>
              <Nav.Link href="/signup" className="mx-2"></Nav.Link>

              {/* Search Bar */}
              <div className="d-flex align-items-center mx-2 search-container">
                <div style={{ position: "relative", width: "200px" }}>
                  <input
                    type="text"
                    placeholder="Enter Area Name"
                    className="form-control"
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      padding: "0.8rem 2rem 0.8rem 1rem",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "gray",
                      cursor: "pointer",
                    }}
                    onClick={handleSearch}
                  />
                </div>
              </div>

              {/* Dropdown for Places */}
              <NavDropdown title="Places" id="places-dropdown" className="mx-2" menuVariant="dark">
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {[
                    "KPHB",
                    "Jntu",
                    "Manikonda",
                    "Kukatpally",
                    "Madhapur",
                    "Ammerpet",
                    "Srnagar",
                    "Hitechcity",
                    "Gachibowli",
                    "Bachupally",
                    "Kondapur",
                    "Nizampet",
                    "Miyapur",
                  ]
                  .map((place) => (
                     <NavDropdown.Item key={place} onClick={() => handlePlaceClick(place)}>
                      {place}
                     </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="about-container">
      <div className="hero-section">
        <h1>Welcome to Box Cricket </h1>
        <p>Your go-to platform for discovering and booking the best box cricket venues.</p>
      </div>

      <div className="content">
        <div className="section">
          <img src="https://images.pexels.com/photos/29162245/pexels-photo-29162245.jpeg" alt="Box Cricket" className="about-img" />
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              We aim to make cricket more accessible by providing a seamless way to find and book box cricket grounds. Whether you're playing 
              with friends or organizing a tournament, our platform ensures a smooth booking experience.
            </p>
          </div>
        </div>

        <div className="section reverse">
          <div className="text">
            <h2>Key Features</h2>
            <ul className="iteams">  
              <li>Discover nearby box cricket venues</li>
              <li>Check real-time availability</li>
              <li>Easy online booking and payments</li>
              <li>Venue ratings and reviews</li>
              <li>User-friendly interface</li>
            </ul>
          </div>
          <img src="https://content.jdmagicbox.com/v2/comp/hyderabad/s3/040pxx40.xx40.210203205029.m9s3/catalogue/sixer-zone-box-cricket-uppal-hyderabad-cricket-turf-grounds-2xief16ulc.jpg" alt="Cricket Venue" className="about-img" />
        </div>

        <div className="section">
          <img src="https://media.hudle.in/venues/f4a13173-1f0a-484d-ab9e-d96bd2a644e3/photo/0a6010b5ba9afbd8f5f8b3d22378df3edf2e2ebd" alt="Cricket Team" className="about-img" />
          <div className="text">
            <h2>Why Choose Us?</h2>
            <p>
              Our app ensures a fast, secure, and reliable booking experience. Whether you're a casual player or a competitive athlete, 
              we provide the best venues at your convenience.
            </p>
          </div>
        </div>

        <div className="contact">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? Reach out to us at 
            <a href="mailto:HIT & RUN Boxcricket@gmail.com"> Hit&runBoxcricket@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>

    </>
  );
};

export default AboutUs;




