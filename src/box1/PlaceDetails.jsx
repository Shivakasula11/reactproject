import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlaceDetails.css";

const PlaceDetails = () => {
  const location = useLocation();
  const { place } = location.state || {};

  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [isGeneratingBill, setIsGeneratingBill] = useState(false);

  if (!place) {
    return (
      <div className="booking-container">
        <div className="booking-wrapper">
          <div style={{
            textAlign: "center",
            padding: "3rem 2rem",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(15, 23, 42, 0.1)"
          }}>
            <h1 style={{
              color: "#dc2626",
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "700"
            }}>
              Place Not Found
            </h1>
            <p style={{
              color: "#64748b",
              fontSize: "1.0625rem"
            }}>
              Please try booking another place.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleBookClick = () => {
    setShowBookingDetails(true);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  /**
   * Professional Bill Generator - CLEAN & SIMPLE
   * No unwanted content, proper rupee symbol, perfect formatting
   */
  const handleGenerateProfessionalBill = async () => {
    if (!selectedDate || !paymentMethod) {
      alert("Please select date/time and payment method first.");
      return;
    }

    setIsGeneratingBill(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const marginLeft = 20;
      const marginRight = 20;
      const contentWidth = pageWidth - marginLeft - marginRight;

      let yPosition = 15;

      // ==================== HEADER ====================
      pdf.setFillColor(26, 54, 93); // Deep Navy
      pdf.rect(0, 0, pageWidth, 35, "F");

      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(24);
      pdf.setTextColor(255, 255, 255);
      pdf.text("BOOKING CONFIRMATION", marginLeft, 20);

      yPosition = 50;

      // ==================== INVOICE INFO ====================
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);

      const invoiceNumber = `INV-${Date.now()}`;
      const invoiceDate = new Date().toLocaleDateString("en-IN");

      pdf.text(`Invoice: ${invoiceNumber}`, marginLeft, yPosition);
      pdf.text(`Date: ${invoiceDate}`, marginLeft, yPosition + 6);

      yPosition += 18;

      // ==================== VENUE DETAILS ====================
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(11);
      pdf.setTextColor(26, 54, 93);
      pdf.text("VENUE", marginLeft, yPosition);

      yPosition += 6;
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(14);
      pdf.setTextColor(26, 54, 93);
      pdf.text(place.name, marginLeft, yPosition);

      yPosition += 7;
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);
      pdf.text(place.address, marginLeft, yPosition);

      yPosition += 18;

      // ==================== BOOKING DETAILS ====================
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(11);
      pdf.setTextColor(26, 54, 93);
      pdf.text("BOOKING DETAILS", marginLeft, yPosition);

      yPosition += 8;

      // Date
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(9);
      pdf.setTextColor(100, 116, 139);
      pdf.text("Date & Time:", marginLeft, yPosition);

      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(26, 54, 93);
      const formattedDateTime = selectedDate.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      pdf.text(formattedDateTime, marginLeft + 35, yPosition);

      yPosition += 7;

      // Payment
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(9);
      pdf.setTextColor(100, 116, 139);
      pdf.text("Payment Method:", marginLeft, yPosition);

      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(26, 54, 93);
      pdf.text(paymentMethod, marginLeft + 35, yPosition);

      yPosition += 18;

      // ==================== PRICING TABLE ====================
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(11);
      pdf.setTextColor(26, 54, 93);
      pdf.text("PRICING", marginLeft, yPosition);

      yPosition += 10;

      // Table header
      pdf.setFillColor(26, 54, 93);
      pdf.rect(marginLeft, yPosition - 6, contentWidth, 7, "F");

      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.text("Description", marginLeft + 5, yPosition);
      pdf.text("Amount", pageWidth - marginLeft - 20, yPosition, { align: "right" });

      yPosition += 10;

      // Row 1: Hourly Rate
      pdf.setFillColor(245, 245, 245);
      pdf.rect(marginLeft, yPosition - 6, contentWidth, 7, "F");

      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);
      pdf.text("Hourly Rate (1 Hour)", marginLeft + 5, yPosition);

      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(26, 54, 93);
      pdf.text(`Rs. ${place.pricePerHour}`, pageWidth - marginLeft - 20, yPosition, { align: "right" });

      yPosition += 10;

      // Row 2: GST
      pdf.setFillColor(255, 255, 255);
      pdf.rect(marginLeft, yPosition - 6, contentWidth, 7, "F");

      const gstAmount = Math.round(place.pricePerHour * 0.18);
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(10);
      pdf.setTextColor(71, 85, 105);
      pdf.text("GST (18%)", marginLeft + 5, yPosition);

      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(26, 54, 93);
      pdf.text(`Rs. ${gstAmount}`, pageWidth - marginLeft - 20, yPosition, { align: "right" });

      yPosition += 10;

      // Row 3: TOTAL
      pdf.setFillColor(5, 150, 105);
      pdf.rect(marginLeft, yPosition - 6, contentWidth, 9, "F");

      const totalAmount = place.pricePerHour + gstAmount;
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(255, 255, 255);
      pdf.text("TOTAL", marginLeft + 5, yPosition + 1);

      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(255, 255, 255);
      pdf.text(`Rs. ${totalAmount}`, pageWidth - marginLeft - 20, yPosition + 1, { align: "right" });

      yPosition += 20;

      // ==================== AMENITIES ====================
      if (place.facilities && place.facilities.length > 0) {
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.setTextColor(26, 54, 93);
        pdf.text("AMENITIES", marginLeft, yPosition);

        yPosition += 7;
        pdf.setFont("Helvetica", "regular");
        pdf.setFontSize(10);
        pdf.setTextColor(71, 85, 105);

        place.facilities.forEach((facility) => {
          pdf.setTextColor(5, 150, 105);
          pdf.text("✓", marginLeft, yPosition);
          pdf.setTextColor(71, 85, 105);
          pdf.text(facility, marginLeft + 6, yPosition);
          yPosition += 6;
        });

        yPosition += 5;
      }

      // ==================== TERMS ====================
      yPosition += 3;
      pdf.setFont("Helvetica", "bold");
      pdf.setFontSize(11);
      pdf.setTextColor(26, 54, 93);
      pdf.text("TERMS & CONDITIONS", marginLeft, yPosition);

      yPosition += 7;
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);

      const terms = [
        "• Booking is valid from the confirmed date and time.",
        "• Cancellation within 24 hours will attract 50% charge.",
        "• Cancellation within 12 hours will be non-refundable.",
      ];

      terms.forEach((term) => {
        pdf.text(term, marginLeft + 3, yPosition);
        yPosition += 5;
      });

      // ==================== FOOTER ====================
      pdf.setFont("Helvetica", "regular");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Generated: ${invoiceDate}`, marginLeft, pageHeight - 10);

      // ==================== SAVE ====================
      const fileName = `Booking_${place.name.replace(/\s+/g, "_")}_${Date.now()}.pdf`;
      pdf.save(fileName);

      alert("Bill generated successfully!");

    } catch (error) {
      console.error("Error generating bill:", error);
      alert("Failed to generate bill. Please try again.");
    } finally {
      setIsGeneratingBill(false);
    }
  };


  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        {/* Page Title */}
        <h1 className="booking-title">{place.name}</h1>

        {/* Main Info Card */}
        <div className="booking-info-card">
          <Row className="g-0">
            {/* Carousel Column */}
            <Col lg={6} className="booking-carousel-wrapper">
              <div className="booking-carousel">
                <Carousel>
                  {place.images?.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`${place.name} view ${index + 1}`}
                        style={{
                          objectFit: "cover",
                          height: "400px"
                        }}
                      />
                      <Carousel.Caption>
                        <h5>{place.name}</h5>
                        <p>Image {index + 1} of {place.images?.length}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>

            {/* Info Column */}
            <Col lg={6} className="booking-info-section">
              <div className="info-item">
                <span className="info-label">Address</span>
                <p className="info-text">{place.address}</p>
              </div>

              <div className="info-item">
                <span className="info-label">Description</span>
                <p className="info-text">{place.description}</p>
              </div>

              <div className="info-item">
                <span className="info-label">Price per hour</span>
                <p className="info-text" style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#059669"
                }}>
                  Rs. {place.pricePerHour}
                </p>
              </div>

              <div className="info-item">
                <span className="info-label">Facilities</span>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem"
                }}>
                  {place.facilities?.map((facility, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "linear-gradient(135deg, #e8f1f8 0%, #e0f2fe 100%)",
                        color: "#1a365d",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.8125rem",
                        fontWeight: "500"
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>✓</span>
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              <div className="booking-button-section" style={{
                padding: "1.5rem 0",
                borderTop: "1px solid #e2e8f0",
                marginTop: "1.5rem"
              }}>
                <button
                  className="btn-book-now"
                  onClick={handleBookClick}
                >
                  Book Now
                </button>
              </div>
            </Col>
          </Row>
        </div>

        {/* Booking Details Section */}
        {showBookingDetails && (
          <>
            {/* Date Selection Card */}
            <div className="booking-form-card">
              <div className="booking-form-header">
                <h4>📅 Select Date and Time</h4>
              </div>
              <div className="booking-form-body">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="form-control"
                  placeholderText="Select date and time"
                  minDate={new Date()}
                />
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="booking-form-card">
              <div className="booking-form-header">
                <h4>💳 Select Payment Method</h4>
              </div>
              <div className="booking-form-body">
                <Form>
                  {['Credit Card', 'UPI', 'Wallet', 'Net Banking'].map((method) => (
                    <Form.Check
                      key={method}
                      type="radio"
                      label={method}
                      name="paymentMethod"
                      id={`payment-${method}`}
                      onChange={() => handlePaymentMethodChange(method)}
                      checked={paymentMethod === method}
                    />
                  ))}
                </Form>
              </div>
            </div>

            {/* Confirmation Card */}
            {selectedDate && paymentMethod && (
              <div className="booking-confirmation-card">
                <div className="booking-confirmation-header">
                  <h5>Booking Confirmation</h5>
                </div>
                <div className="booking-confirmation-body">
                  <div className="confirmation-detail">
                    <p>
                      <strong>Venue</strong>
                      {place.name}
                    </p>
                  </div>

                  <div className="confirmation-detail">
                    <p>
                      <strong>Address</strong>
                      {place.address}
                    </p>
                  </div>

                  <div className="confirmation-detail">
                    <p>
                      <strong>Date & Time</strong>
                      {selectedDate.toString()}
                    </p>
                  </div>

                  <div className="confirmation-detail">
                    <p>
                      <strong>Payment Method</strong>
                      {paymentMethod}
                    </p>
                  </div>

                  <div className="confirmation-detail" style={{
                    background: "#d1fae5",
                    borderLeftColor: "#059669"
                  }}>
                    <p style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong style={{ color: "#059669" }}>Total Cost</strong>
                      <strong style={{
                        fontSize: "1.25rem",
                        color: "#059669"
                      }}>
                        Rs. {place.pricePerHour + Math.round(place.pricePerHour * 0.18)}
                      </strong>
                    </p>
                  </div>

                  <div className="confirmation-button-group">
                    <button
                      className="btn-confirm"
                      onClick={handleGenerateProfessionalBill}
                      disabled={isGeneratingBill}
                      style={{
                        opacity: isGeneratingBill ? 0.6 : 1,
                        cursor: isGeneratingBill ? "not-allowed" : "pointer"
                      }}
                    >
                      {isGeneratingBill ? "Generating Bill..." : "Confirm and Generate Bill"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlaceDetails;