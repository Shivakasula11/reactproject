import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import batball from "./images/batball.jpg";
import players from "./images/players.jpg";
import Wicket from "./images/wicket.jpg";
import Box from "./images/box.jpg";
import yog from "./images/yog.jpg";
import box4 from "./images/box4.jpg";
import box3 from "./images/box3.jpg";

const CustomCarousel = () => {
  return (
    <div>
      <style>
        {`
        /* Global Styles for responsiveness */
        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            align-items: center;
          }

          .card-container > div {
            margin-bottom: 20px;
          }

          .info-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .info-section img {
            width: 100%;
            height: auto;
          }

          footer {
            padding: 15px;
            font-size: 14px;
          }

          footer div p {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          h3, h2 {
            font-size: 18px;
          }

          .card-title, .card-text {
            font-size: 14px;
          }
        }
        `}
      </style>

      {/* Grey Background Div */}
      <div style={{ backgroundColor: "grey", color: "black" }}>
        {/* Carousel Section */}
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={batball}
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yog}
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={box4}
              alt="Third slide"
              style={{ height: "400px", objectFit: "fill" }}
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Cards Section */}
      <div
        style={{
          backgroundColor: "rgb(70, 130, 180)",
          color: "white",
          padding: "20px",
        }}
      >
        <div
          style={{
            margin: "30px 0",
            padding: "20px",
            backgroundColor: "#A9BFA8",
            borderRadius: "10px",
          }}
        >
          <div
            className="card-container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <div>
              <Card
                style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
              >
                <Card.Img
                  variant="top"
                  src={box3}
                  alt="Bat and Ball"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Top-Notch Turfs</Card.Title>
                  <Card.Text>
                    Discover premium cricket turfs with excellent facilities and
                    ambiance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card
                style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
              >
                <Card.Img
                  variant="top"
                  src={players}
                  alt="Players"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Competitive Matches</Card.Title>
                  <Card.Text>
                    Join thrilling matches and test your skills with fellow
                    enthusiasts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card
                style={{ width: "18rem", backgroundColor: "#222", color: "white" }}
              >
                <Card.Img
                  variant="top"
                  src={Box}
                  alt="Cricket Box"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Easy Booking</Card.Title>
                  <Card.Text>
                    Book your preferred venue effortlessly with our seamless
                    platform.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div
          className="info-section"
          style={{ display: "flex", marginTop: "10px", gap: "20px" }}
        >
          <div className="add">
            <button className="info">HIT & RUN</button>
            <h2 id="info1">BOX CRICKET &#127951;</h2>

            <h3 style={{ color: "white" }}>Box Cricket Venues in Hyderabad</h3>
            <p style={{ color: "white" }}>
              Ready to level up your box cricket game? Explore and discover
              top-notch box cricket turfs in Hyderabad. Compare prices and
              conveniently book your preferred venue online. Join the Nandhu
              community now!
            </p>
          </div>
          <div>
            <img
              className="wicket"
              style={{ height: "300px", width: "100%", maxWidth: "600px" }}
              src={Wicket}
              alt="wicket"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#1a1a1a",
          color: "#e0e0e0",
          padding: "50px 20px 30px",
          borderTop: "3px solid #0d0c0c",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Main Footer Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {/* About Section */}
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                HIT & RUN
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#b0b0b0",
                  marginBottom: "15px",
                }}
              >
                We are passionate about bringing you the best box cricket experience through our premium services. Our platform is designed with user satisfaction and convenience in mind.
              </p>
             
             
             
            </div>

            {/* Contact Section */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                 Quick Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#dde5ed",
                      marginBottom: "5px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+916301993194"
                    style={{
                      fontSize: "14px",
                      color: "#e0e0e0",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#938f8e")}
                    onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
                  >
                    +91 6301993194
                  </a>
                  <br />
                  <a
                    href="tel:+917337011242"
                    style={{
                      fontSize: "14px",
                      color: "#e0e0e0",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#d7d1cf")}
                    onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
                  >
                    +91 7337011242
                  </a>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#dde5ed",
                      marginBottom: "5px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hitandrunboxcricket@gmail.com"
                    style={{
                      fontSize: "14px",
                      color: "#e0e0e0",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      wordBreak: "break-word",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#e2dcda")}
                    onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
                  >
                    Hit&runBoxcricket@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                 Location
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: "#b0b0b0",
                }}
              >
                PLOT NO: 46 NEAR KPHP,Kukatpally
                <br />
                HYDERABAD, India
              </p>
              
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #333",
              paddingTop: "20px",
              marginTop: "30px",
            }}
          >
            {/* Bottom Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "#888",
                  margin: "0",
                }}
              >
                © 2024 HIT & RUN Box Cricket. All Rights Reserved.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomCarousel;