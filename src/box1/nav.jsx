// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import CustomCarousel from "./coursels";
// import Loginicon from "./images/Loginicon.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./images/Logo.jpg";
// import "./Box1.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import   Button  from "react-bootstrap";
// // import Mainpage from "../Mainpage";



// const  Navb = ()=> {
    
//   const[search,setsearch]=useState("");
//   const navigate=useNavigate();

//   const handlesearch=()=>{
//     if (search.trim() === "") {
//       alert("Please enter an area name to search");
//       return;
//     }
//     navigate(`/area/${search.trim().toLowerCase()}`);

//   };

  

//   return (
//     <div classname="nav">
//       <Navbar className="custom-navbar"bg="" data-bs-theme="dark">
//         <Container>
//           <img
//           classname="nav-bar-image"
//             style={{ height: "80px", width: "80px",borderRadius:"50px" }}
//             src={Logo}
//             alt="cricket"
//           />
//           <Navbar.Brand href="#home">BOX CRICKET </Navbar.Brand>
//           <Nav className="box1">
//             <Nav.Link href="/home">HOME</Nav.Link  >
//             <Nav.Link href="/aboutus">ABOUTUS</Nav.Link>
//             <Nav.Link href="/contact">CONTACT</Nav.Link>
            
//             <img
//               style={{ height: "40px", width: "40px", borderRadius: "50px" }}
//               src={Loginicon}
//               alt="Loginicon"
//             />
//             <Nav.Link href="#LOGIN/SIGNUP">LOGIN/SIGNUP</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <div className="bar" >
        
//         <FontAwesomeIcon
//           // icon={faMagnifyingGlass}
//           icon={faMagnifyingGlass}
//           size="2x"
//           style={{ position: "absolute",
//             right: "210px",zIndex:"2"}} onClick={handlesearch}
//         />
//         {/* <div className="input" > */}
//           <input
//             type=" text"
//             placeholder="     Please Enter Area Name Here"
//             style={{ width: "30vw", height: "7vh", borderRadius: "50px", paddingLeft:"60px", outLine:"none",position:"absolute" }}
//             onChange={(e)=>setsearch(e.target.value)} 
//           />
//       </div>
//       <div style={{ padding: "40px" }}>

//       <div className="marquee-container">
//       <div className="marquee">
//         Timings: Morning 6:30 AM to Night 2:00 AM
//       </div>
//     </div>
//         {/* {{Mainpage}} */}
//         <CustomCarousel />
//       </div>
//     </div>
//   );
// }

// export default Navb;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/Logo.jpg";
import Loginicon from "./images/Loginicon.jpg";
import CustomCarousel from "./coursels";
import "./Box1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 


const Navb = () => {
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
    <>
      {/* Responsive Navbar */}
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
              <img
                src={Loginicon}
                alt="Login"
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  marginRight: "7px",
                }}
              />
              Login
            </Nav.Link>
            <Nav.Link href="/signup" className="mx-2">
              {/* Signup */}
            </Nav.Link>

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
              <div
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
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

      <div style={{ paddingTop: "90px" }}>
        <div className="marquee-container" style={{ overflow: "hidden", position: "relative", height: "30px" }}>
          <div
            className="marquee"
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "scrollLeft 10s linear infinite",
              fontSize: "18px",
              color: "white",
            }}
          >
            Timings: Morning 7:30 AM to Night 3:00 AM
          </div>
        </div>

        {/* Carousel Section */}
        <CustomCarousel />
      </div>
    </>
  );
};

export default Navb;  
