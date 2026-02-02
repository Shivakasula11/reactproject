


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const PlaceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { place } = location.state; // Access the passed data

  if (!place) {
    return (
      <Container className="mt-4">
        <h1 className="text-center text-danger">Place Not Found</h1>
        <p className="text-center">Please try booking another place.</p>
      </Container>
    );
  }

  const handleBooking = () => {
    navigate("/booking", { state: { place } });
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">{place.name}</h1>
      <Card
        className="custom-card"
        style={{
          // backgroundColor: "black", // Black background for the card
          color: "#fff", // White text for better readability
          padding: "20px",
          borderRadius: "10px",

        }}
      >
        <div
          className="custom-card-flex"
          style={{
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          
            
          }}
        >
          {/* Image Carousel Section */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "20px",
              textAlign: "center",
            display:"flex"
            }}
          >
            <Carousel>
              {place.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #fff",
                    }}
                  />
                  <Carousel.Caption>
                    <h5>{place.name}</h5>
                    <p>Slide {index + 1}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Content Section */}
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingRight:"20px",
              backgroundColor:"black", //content background clr
              
            }}
          >
            <Card.Body>
              <Card.Text>
                <strong>Address:</strong> {place.address}
              </Card.Text>
              <Card.Text>{place.description}</Card.Text>
              <Card.Text>
                <strong>Price per hour:</strong> ₹{place.pricePerHour}
              </Card.Text>
              <Card.Text>
                <strong>Facilities:</strong> {place.facilities.join(", ")}
              </Card.Text>
              <Button
                style={{
                  height: "70px",
                  width: "142px",
                  marginTop: "20px",
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                  fontWeight: "bold",
                  
                }}
             

              variant="success"
              onClick={handleBooking}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#218838"; // Darker green
                e.target.style.transform = "scale(1.05)"; // Slightly larger
                e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#28a745"; // Original color
                e.target.style.transform = "scale(1)"; // Reset size
                e.target.style.boxShadow = "none"; // Reset shadow
              }}
            >
              Proceed to Book
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default PlaceDetails;





