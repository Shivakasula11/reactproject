



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
          backgroundColor: "#222",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h4>About Us</h4>
          <p>
            We are passionate about bringing you the best experience through our
            services. Our platform is designed with user satisfaction in mind.
          </p>
          <hr style={{ border: "1px solid white", margin: "20px 0" }} />
          <div>
            <p>
              <strong>Contact Number:</strong> +91 6301993194, 7337011242
            </p>
            <p>
              <strong>Email:</strong> HIT & RUN Boxcricket@gmail.com
            </p>
            <p>
              <strong>Location:</strong>PLOT NO:46 NEAR KPHP, HYDERABAD, India
            </p>
            <p>
              <strong>Copyrights</strong>© 2024 HIT & RUN Box Cricket. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomCarousel;
