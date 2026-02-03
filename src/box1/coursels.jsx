import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import batball from "./images/batball.jpg";
import players from "./images/players.jpg";
import Wicket from "./images/wicket.jpg";
import Box from "./images/box.jpg";
import yog1 from "./images/yog1.jpg";
import box3 from "./images/box3.jpg";
// import pexels from "./images/pexels.jpg";
import cric7 from "./images/cric7.jpg";

const CustomCarousel = () => {
  return (
    <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
      <style>
        {`
     
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@700;800&display=swap');

* {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  box-sizing: border-box;
}

/* Smooth Scrolling */
html, body, #root {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Remove all default margins and paddings */
.carousel,
.carousel-inner,
.carousel-item,
.carousel-item img {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

.grey-section {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
}

.blue-section {
  margin: 0 !important;
  width: 100% !important;
}

/* Custom Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced Carousel Styles */
.carousel-item img {
  filter: brightness(0.85);
  transition: filter 0.5s ease, transform 0.5s ease;
}

.carousel-item:hover img {
  filter: brightness(1);
  transform: scale(1.02);
}

.carousel-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  padding: 40px 20px 30px !important;
  animation: fadeInUp 0.8s ease;
}

.carousel-caption h3 {
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  letter-spacing: 1px;
  margin-bottom: 10px;
}

/* Enhanced Card Styles */
.custom-card {
  background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%) !important;
  border: none !important;
  border-radius: 20px !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.6s ease;
  position: relative;
}

.custom-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4a90e2, #50c878, #4a90e2);
  background-size: 200% 100%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.custom-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 20px 50px rgba(74, 144, 226, 0.4);
}

.custom-card img {
  transition: transform 0.5s ease;
  height: 200px !important;
  object-fit: cover;
}

.custom-card:hover img {
  transform: scale(1.15);
}

.custom-card .card-body {
  padding: 25px;
}

.custom-card .card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #ffffff 0%, #a0d8f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.custom-card .card-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #c0c0c0;
}

/* Info Button Enhancement */
.info {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  overflow: hidden;
}

.info::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.info:hover::before {
  width: 300px;
  height: 300px;
}

.info:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.6);
}

/* Info Section Enhancement */
#info1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
}

.add h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

.add p {
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 300;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.wicket {
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.wicket:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Footer Link Hover Effects */
footer a {
  position: relative;
  display: inline-block;
}

footer a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(90deg, #4a90e2, #50c878);
  transition: width 0.3s ease;
}

footer a:hover::after {
  width: 100%;
}

/* Section Backgrounds */
.grey-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.grey-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: backgroundMove 20s linear infinite;
}

@keyframes backgroundMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.blue-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a3238 100%);
  position: relative;
  padding: 60px 20px !important;
}

.cards-wrapper {
  background: linear-gradient(145deg, #ffffff 0%, #e8f5e9 100%);
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: fadeInUp 0.8s ease;
  margin: 0 auto !important;
}

/* Enhanced Footer */
footer {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
  position: relative;
  overflow: hidden;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4a90e2, #50c878, #f6d365, #4a90e2);
  background-size: 300% 100%;
  animation: gradientShift 5s ease infinite;
}

footer h3, footer h4 {
  position: relative;
  display: inline-block;
}

footer h3::after, footer h4::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #4a90e2, #50c878);
  border-radius: 2px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card-container > div {
    margin-bottom: 30px;
    width: 100%;
    max-width: 400px;
  }

  .custom-card {
    width: 100% !important;
  }

  .info-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-section img {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }

  .carousel-caption h3 {
    font-size: 1.8rem;
  }

  #info1 {
    font-size: 2.2rem;
  }

  .add h3 {
    font-size: 1.4rem;
  }

  .add p {
    font-size: 1rem;
  }

  footer {
    padding: 30px 15px !important;
  }

  footer div p {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .carousel-caption h3 {
    font-size: 1.4rem;
  }

  #info1 {
    font-size: 1.8rem;
  }

  .info {
    padding: 10px 25px;
    font-size: 0.9rem;
  }

  .card-title {
    font-size: 1.2rem !important;
  }

  .card-text {
    font-size: 0.85rem !important;
  }
}
        `}
      </style>

      {/* Enhanced Grey Background Section with Gradient */}
      <div className="grey-section" style={{ color: "white", position: "relative" }}>
        {/* Carousel Section */}
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={batball}
              alt="First slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Premium Cricket Experience</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={yog1}
              alt="Second slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>World-Class Facilities</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ cric7}
              alt="Third slide"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Book Your Game Today</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Enhanced Cards Section with Gradient Background */}
      <div className="blue-section" style={{ color: "white" }}>
        <div
          className="cards-wrapper"
          style={{
            padding: "50px 30px",
            maxWidth: "1400px",
          }}
        >
          <div
            className="card-container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Card className="custom-card" style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src={box3}
                  alt="Bat and Ball"
                />
                <Card.Body>
                  <Card.Title>Top-Notch Turfs</Card.Title>
                  <Card.Text>
                    Discover premium cricket turfs with excellent facilities and
                    ambiance for an unforgettable experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card className="custom-card" style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src={players}
                  alt="Players"
                />
                <Card.Body>
                  <Card.Title>Competitive Matches</Card.Title>
                  <Card.Text>
                    Join thrilling matches and test your skills with fellow
                    cricket enthusiasts in exciting tournaments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Card className="custom-card" style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src={Box}
                  alt="Cricket Box"
                />
                <Card.Body>
                  <Card.Title>Easy Booking</Card.Title>
                  <Card.Text>
                    Book your preferred venue effortlessly with our seamless
                    platform and instant confirmation system.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Info Section */}
        <div
          className="info-section"
          style={{
            display: "flex",
            marginTop: "60px",
            gap: "50px",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "60px auto 0",
            padding: "0 30px",
          }}
        >
          <div className="add" style={{ flex: 1, animation: "slideInLeft 0.8s ease" }}>
            <h3 id="info1">BOX CRICKET &#127951;</h3>

            <h3 style={{ color: "white" }}>Box Cricket Venues in Hyderabad</h3>
            <p style={{ color: "white" }}>
              Ready to level up your box cricket game? Explore and discover
              top-notch box cricket turfs in Hyderabad. Compare prices and
              conveniently book your preferred venue online. Join the Nandhu
              community now and experience the thrill!
            </p>
          </div>
          <div style={{ flex: 1, animation: "slideInRight 0.8s ease" }}>
            <img
              className="wicket"
              style={{ height: "350px", width: "100%", maxWidth: "600px", objectFit: "cover" }}
              src={Wicket}
              alt="wicket"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Footer Section */}
      <footer
        style={{
          color: "#e0e0e0",
          padding: "60px 20px 30px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Main Footer Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "50px",
              marginBottom: "50px",
            }}
          >
            {/* About Section */}
            <div style={{ animation: "fadeInUp 0.6s ease" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                HIT & RUN
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "#d0d0d0",
                  marginBottom: "15px",
                }}
              >
                We are passionate about bringing you the best box cricket experience through our premium services. Our platform is designed with user satisfaction and convenience in mind.
              </p>
            </div>

            {/* Contact Section */}
            <div style={{ animation: "fadeInUp 0.7s ease" }}>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Quick Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#a0d8f1",
                      marginBottom: "8px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+916301993194"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      display: "block",
                      marginBottom: "8px",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#50c878")}
                    onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                  >
                    +91 6301993194
                  </a>
                  <a
                    href="tel:+917337011242"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      display: "block",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#50c878")}
                    onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                  >
                    +91 7337011242
                  </a>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#a0d8f1",
                      marginBottom: "8px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hitandrunboxcricket@gmail.com"
                    style={{
                      fontSize: "15px",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      wordBreak: "break-word",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#50c878")}
                    onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                  >
                    Hit&runBoxcricket@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div style={{ animation: "fadeInUp 0.8s ease" }}>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "25px",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Location
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "#d0d0d0",
                }}
              >
                PLOT NO: 46 NEAR KPHP, Kukatpally
                <br />
                HYDERABAD, India
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "2px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "25px",
              marginTop: "40px",
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
                  fontSize: "14px",
                  color: "#b0b0b0",
                  margin: "0",
                }}
              >
                © 2024 HIT & RUN Box Cricket. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomCarousel;