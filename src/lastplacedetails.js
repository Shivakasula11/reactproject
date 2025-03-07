// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';

// const PlaceDetails = () => {
//   const location = useLocation();
//   const { place } = location.state; // Access the passed data

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//         <p className="text-center">Please try booking another place.</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">{place.name}</h1>
//       <Card className="custom-card">
//         <div className="custom-card-flex">
//           <div style={{ width: "50%", margin: "auto" }}>
//             {/* <Card.Img
//               variant="top"
//               src={place.image}
//               className="custom-card-img"
//             /> */}
//             <Carousel>
//                 {place.images.map((image,index)=>(
//                     <Carousel.Item key={index}>
//                         <img className="d-bloack w-100" src={image} alt="iamges"/>
//                         <Carousel.Caption>
//                     <h5>{place.name}</h5>
//                     <p>Slide {index + 1}</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
                    
//                 ))}
//             </Carousel>
//           </div>
//           <div>
//             <Card.Body className="custom-card-body">
//               <Card.Text>
//                 <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                 <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities.join(", ")}
//               </Card.Text>
//               <Button variant="success">Proceed to Book</Button>
//             </Card.Body>
//           </div>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default PlaceDetails;


// updated


// import React, { useState } from "react"; 
// import { useLocation } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const PlaceDetails = () => {
//   const location = useLocation();
//   const { place } = location.state; // Access the passed data

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [showBookingDetails, setShowBookingDetails] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//         <p className="text-center">Please try booking another place.</p>
//       </Container>
//     );
//   }

//   const handleBookClick = () => {
//     setShowBookingDetails(true);
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleConfirmAndPay = () => {
//     if (!selectedDate) {
//       alert("Please select a date and time.");
//       return;
//     }
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const receiptData = {
//       bookingId: Math.random().toString(36).substr(2, 9).toUpperCase(),
//       placeName: place.name,
//       address: place.address,
//       dateAndTime: selectedDate.toString(),
//       paymentMethod,
//       totalCost: place.pricePerHour,
//       facilities: place.facilities?.join(", ") || "No facilities available",
//     };
//     setReceipt(receiptData);
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">{place.name}</h1>
//       <Card className="custom-card">
//         <div className="custom-card-flex">
//           <div style={{ width: "50%", margin: "auto" }}>
//             <Carousel>
//               {place.images?.map((image, index) => (
//                 <Carousel.Item key={index}>
//                   <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//           <div>
//             <Card.Body className="custom-card-body">
//               <Card.Text>
//                 <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                 <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities?.join(", ") || "No facilities available"}
//               </Card.Text>
//             </Card.Body>
//           </div>
//         </div>
//       </Card>

//       {/* Select Schedule Section */}
//       <Card className="mt-4">
//         <Card.Header>
//           <h4>Select Your Schedule</h4>
//         </Card.Header>
//         <Card.Body>
//           <Card.Text>
//             <strong>Cost per Hour:</strong> ₹{place.pricePerHour}
//           </Card.Text>
//           <Button variant="primary" onClick={handleBookClick}>
//             Book Now
//           </Button>
//         </Card.Body>
//       </Card>

//       {/* Show Booking Details and Payment Method after Clicking Book */}
//       {showBookingDetails && !receipt && (
//         <>
//           {/* Booking Details Section */}
//           <Card className="mt-4">
//             <Card.Header>
//               <h4>Select Date and Time</h4>
//             </Card.Header>
//             <Card.Body>
//               <Form.Group>
//                 <Form.Label>Select Date and Time</Form.Label>
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={(date) => setSelectedDate(date)}
//                   showTimeSelect
//                   dateFormat="yyyy/MM/dd h:mm aa"
//                   className="form-control"
//                 />
//               </Form.Group>
//             </Card.Body>
//           </Card>

//           {/* Payment Method Section */}
//           <Card className="mt-4">
//             <Card.Header>
//               <h4>Select Payment Method</h4>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 <Form.Check
//                   type="radio"
//                   label="Credit Card"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Credit Card")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="UPI"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("UPI")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Wallet"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Wallet")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Net Banking"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Net Banking")}
//                 />
//               </Form>

//               {paymentMethod && (
//                 <div className="mt-3">
//                   <p>
//                     Selected Payment Method: <strong>{paymentMethod}</strong>
//                   </p>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>

//           {/* Final Confirmation */}
//           {selectedDate && paymentMethod && (
//             <Card className="mt-4">
//               <Card.Body>
//                 <h5 className="text-center">
//                   <strong>Booking Confirmation</strong>
//                 </h5>
//                 <p>
//                   <strong>Date & Time:</strong> {selectedDate.toString()}
//                 </p>
//                 <p>
//                   <strong>Payment Method:</strong> {paymentMethod}
//                 </p>
//                 <p>
//                   <strong>Total Cost:</strong> ₹{place.pricePerHour}
//                 </p>
//                 <div className="text-center">
//                   <Button variant="success" onClick={handleConfirmAndPay}>
//                     Confirm and Pay ₹{place.pricePerHour}
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           )}
//         </>
//       )}

//       {/* Receipt Section */}
//       {receipt && (
//         <Card className="mt-4">
//           <Card.Header>
//             <h4>Receipt</h4>
//           </Card.Header>
//           <Card.Body>
//             <p><strong>Booking ID:</strong> {receipt.bookingId}</p>
//             <p><strong>Place Name:</strong> {receipt.placeName}</p>
//             <p><strong>Address:</strong> {receipt.address}</p>
//             <p><strong>Date & Time:</strong> {receipt.dateAndTime}</p>
//             <p><strong>Payment Method:</strong> {receipt.paymentMethod}</p>
//             <p><strong>Facilities:</strong> {receipt.facilities}</p>
//             <p><strong>Total Cost:</strong> ₹{receipt.totalCost}</p>
//             <p className="text-center text-success"><strong>Thank you for booking with us!</strong></p>
//           </Card.Body>
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default PlaceDetails;




// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";

// const PlaceDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { place } = location.state; // Access the passed data

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//         <p className="text-center">Please try booking another place.</p>
//       </Container>
//     );
//   }

//   const handleBooking = () => {
//     navigate("/booking", { state: { place } });
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">{place.name}</h1>
//       <Card className="custom-card">
//         <div className="custom-card-flex">
//           <div style={{ width: "50%", margin: "auto" }}>
//             <Carousel>
//               {place.images.map((image, index) => (
//                 <Carousel.Item key={index}>
//                   <img
//                     className="d-block w-100"
//                     src={image}
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <Carousel.Caption>
//                     <h5>{place.name}</h5>
//                     <p>Slide {index + 1}</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//           <div >
//             <Card.Body className="custom-card-body">
//               <Card.Text>
//                 <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                 <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities.join(", ")}
//               </Card.Text>
//               <Button  style={{height:"70px",width:"145px",}}
//                variant="success" onClick={handleBooking}>
//                 Proceed to Book
//               </Button>
//             </Card.Body>
//           </div>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default PlaceDetails; suceess1


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";

// const PlaceDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { place } = location.state; // Access the passed data

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//         <p className="text-center">Please try booking another place.</p>
//       </Container>
//     );
//   }

//   const handleBooking = () => {
//     navigate("/booking", { state: { place } });
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">{place.name}</h1>
//       <Card className="custom-card">
//         <div
//           className="custom-card-flex"
//           style={{
//             // display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexWrap: "wrap",
            
//           }}
//         >
//           <div style={{ width: "50%", maxWidth: "400px", margin: "20px" }}>
//             <Carousel>
//               {place.images.map((image, index) => (
//                 <Carousel.Item key={index}>
//                   <img
//                     className="d-block w-100"
//                     src={image}
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <Carousel.Caption>
//                     <h5>{place.name}</h5>
//                     <p>Slide {index + 1}</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//           <div
//             style={{
              
//               width: "50%",
//               maxWidth: "400px",
//               textAlign: "center",
//               margin: "20px",
//             }}
//           >
//             <Card.Body>
//               <Card.Text>
//                 <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                 <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities.join(", ")}
//               </Card.Text>
//               <Button
//                 style={{
//                   height: "70px",
//                   width: "145px",
//                   marginTop: "20px",
//                 }}
//                 variant="success"
//                 onClick={handleBooking}
//               >
//                 Proceed to Book
//               </Button>
//             </Card.Body>
//           </div>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default PlaceDetails; okok



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





