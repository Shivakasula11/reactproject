import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../src/box1/images/Logo.jpg";
import "./contactform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ContactUs = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter an area name to search");
      return;
    }
    navigate(`/area/${search.trim().toLowerCase()}`);
  };

  const handlePlaceClick = (place) => {
    navigate(`/area/${place.toLowerCase()}`);
  };

  return (
    <div className="contact">
      <div>
        {/* Navbar */}
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

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="/home" className="mx-2">
                  Home
                </Nav.Link>
                <Nav.Link href="/aboutus" className="mx-2">
                  About Us
                </Nav.Link>
                <Nav.Link href="/contact" className="mx-2">
                  Contact
                </Nav.Link>
                <Nav.Link href="/login" className="mx-2 d-flex align-items-center">
                 
                  Login
                </Nav.Link>
                <Nav.Link href="/signup" className="mx-2" />

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
                <NavDropdown
                  title="Places"
                  id="places-dropdown"
                  className="mx-2"
                  menuVariant="dark"
                >
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
                    ].map((place) => (
                      <NavDropdown.Item
                        key={place}
                        onClick={() => handlePlaceClick(place)}
                      >
                        {place}
                      </NavDropdown.Item>
                    ))}
                  </div>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Contact Form */}
        <div className="container-fluid">
          <div className="contact-container">
            <h1 className="contact-heading" style={{color:"blue"}}>Get in Touch</h1>
            <p className="contact-description" style={{color:"blue"}}>
              Have questions or need help? Feel free to reach out to us!
            </p>
            <form className="contact-form">
              <label className="form-label box">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your name"
              />
              <label className="form-label box">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
              />
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Enter your message"
              />
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;