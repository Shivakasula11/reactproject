import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaGooglePay, FaMobileAlt, FaCcVisa } from "react-icons/fa";

const BookingPage = () => {
  const [userName, setUserName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  const GST_PERCENTAGE = 18;

  const validateCardNumber = (value) => /^\d{16}$/.test(value);
  const validateExpiryDate = (value) => {
    const regex = /^\d{4}-\d{2}$/;
    if (!regex.test(value)) return false;
    const [year, month] = value.split("-").map(Number);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };
  const validateCvv = (value) => /^\d{3}$/.test(value);
  const validateAmount = (value) => !isNaN(value) && parseFloat(value) > 0;

  const calculateGST = (baseAmount) => (baseAmount * GST_PERCENTAGE) / 100;

  const generateTransactionId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const generatePDF = (transactionId) => {
    const baseAmount = parseFloat(amount);
    const gstAmount = calculateGST(baseAmount);
    const totalAmount = baseAmount + gstAmount;
    console.log(baseAmount, gstAmount, totalAmount, "base gst");
    const doc = new jsPDF();
    const logoUrl = "https://via.placeholder.com/100";

    doc.addImage(logoUrl, "JPEG", 80, 10, 50, 30);
    doc.setFontSize(20);
    doc.text("Booking Invoice", 95, 50);

    doc.autoTable({
      startY: 60,
      head: [["Field", "Details"]],
      body: [
        ["Name", userName],
        ["Booking Date", bookingDate],
        ["Payment Method", paymentMethod],
        ["Transaction ID", transactionId],
        paymentMethod === "card" && ["Card Number", cardNumber.replace(/\d(?=\d{4})/g, "*")],
        ["Base Amount", `${baseAmount.toFixed(2)}`],
        ["GST (18%)", `${gstAmount.toFixed(2)}`],
        ["Total Amount", `${totalAmount.toFixed(2)}`],
      ].filter(Boolean),
      theme: "striped",
      styles: {
        fontSize: 12,
        cellPadding: 5,
        halign: "center",
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: 255,
        fontSize: 14,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
    });

    doc.setFontSize(14);
    doc.text("Thank You for Your Booking!", 80, doc.lastAutoTable.finalY + 20);
    doc.text("Visit Again!", 80, doc.lastAutoTable.finalY + 30);

    doc.save("Booking_Invoice.pdf");
  };

  const handlePayment = (isCardPayment = false) => {
    if (!userName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!bookingDate) {
      alert("Please select a booking date.");
      return;
    }

    if (!validateAmount(amount)) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }

    if (isCardPayment) {
      if (!validateCardNumber(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }

      if (!validateExpiryDate(expiryDate)) {
        alert("Please enter a valid expiry date.");
        return;
      }

      if (!validateCvv(cvv)) {
        alert("Please enter a valid CVV (3 digits).");
        return;
      }
    }

    const transactionId = generateTransactionId();

    generatePDF(transactionId);
  };

  const styles = {
    pageContainer: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "60px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    headerSection: {
      textAlign: "center",
      marginBottom: "40px",
      color: "white",
    },
    headerTitle: {
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "10px",
      letterSpacing: "-0.5px",
    },
    headerSubtitle: {
      fontSize: "16px",
      opacity: "0.9",
      fontWeight: "300",
    },
    formCard: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
      padding: "40px",
      maxWidth: "700px",
      margin: "0 auto",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    formGroup: {
      marginBottom: "24px",
    },
    formLabel: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#2c3e50",
      marginBottom: "8px",
      display: "block",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    formControl: {
      border: "2px solid #e8ecf1",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "14px",
      fontFamily: "inherit",
      transition: "all 0.3s ease",
      backgroundColor: "#f8fafc",
    },
    paymentMethodSection: {
      marginTop: "32px",
      paddingTop: "32px",
      borderTop: "2px solid #e8ecf1",
    },
    cardDetailsSection: {
      marginTop: "24px",
      padding: "24px",
      backgroundColor: "#f8fafc",
      borderRadius: "12px",
      border: "2px solid #e8ecf1",
    },
    paymentButtonSection: {
      marginTop: "32px",
      display: "flex",
      justifyContent: "center",
    },
    amountDisplay: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "24px",
      borderRadius: "12px",
      marginTop: "32px",
      textAlign: "center",
    },
    amountLabel: {
      fontSize: "13px",
      opacity: "0.9",
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    amountValue: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    gstInfo: {
      fontSize: "12px",
      opacity: "0.8",
    },
  };

  const baseAmount = amount ? parseFloat(amount) : 0;
  const gstAmount = calculateGST(baseAmount);
  const totalAmount = baseAmount + gstAmount;

  return (
    <div style={styles.pageContainer}>
      <style>
        {`
          @media (max-width: 768px) {
            .form-card {
              padding: 25px !important;
            }
            .header-title {
              font-size: 28px !important;
            }
            .amount-display {
              margin-top: 24px !important;
            }
          }

          @media (max-width: 480px) {
            .form-card {
              padding: 20px !important;
              border-radius: 12px;
            }
            .header-title {
              font-size: 22px !important;
            }
            .primary-button {
              max-width: 100% !important;
            }
          }

          input:focus,
          select:focus,
          textarea:focus {
            outline: none;
            border-color: #667eea !important;
            background-color: white !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          }

          input:invalid:focus {
            border-color: #e74c3c !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
          }

          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 14px 32px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
            transition: all 0.3s ease !important;
            width: 100%;
          }

          .btn-primary:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
          }

          .btn-outline-dark {
            border: 2px solid #667eea !important;
            color: #667eea !important;
            border-radius: 8px !important;
            padding: 12px 28px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            transition: all 0.3s ease !important;
            width: 100%;
          }

          .btn-outline-dark:hover {
            background-color: #667eea !important;
            color: white !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
            border-color: #667eea !important;
          }

          .form-control {
            border: 2px solid #e8ecf1 !important;
            border-radius: 8px !important;
            padding: 12px 16px !important;
            background-color: #f8fafc !important;
            transition: all 0.3s ease !important;
            font-family: inherit !important;
          }

          .form-control:focus {
            border-color: #667eea !important;
            background-color: white !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          }

          .form-label {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: #2c3e50 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            margin-bottom: 8px !important;
          }

          .form-control.is-invalid {
            border-color: #e74c3c !important;
          }

          .form-control.is-invalid:focus {
            border-color: #e74c3c !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
          }

          .invalid-feedback {
            font-size: 12px !important;
            margin-top: 6px !important;
            color: #e74c3c !important;
          }
        `}
      </style>

      <div style={styles.headerSection}>
        <h1 style={styles.headerTitle} className="header-title">
          Secure Booking
        </h1>
        <p style={styles.headerSubtitle}>Complete your booking with confidence</p>
      </div>

      <div style={styles.formCard} className="form-card">
        <Form>
          {/* Name */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Full Name</label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Booking Date */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Booking Date</label>
            <Form.Control
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />
          </div>

          {/* Amount */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Amount (₹)</label>
            <Form.Control
              type="number"
              placeholder="Enter the amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              isInvalid={amount && !validateAmount(amount)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid amount greater than 0.
            </Form.Control.Feedback>
          </div>

          {/* Amount Display */}
          {amount && (
            <div style={styles.amountDisplay} className="amount-display">
              <div style={styles.amountLabel}>Total Amount (Including GST)</div>
              <div style={styles.amountValue}>₹ {totalAmount.toFixed(2)}</div>
              <div style={styles.gstInfo}>
                Base Amount: ₹{baseAmount.toFixed(2)} + GST (18%): ₹{gstAmount.toFixed(2)}
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div style={styles.paymentMethodSection}>
            <label style={styles.formLabel}>Payment Method</label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">💳 Card (Visa, MasterCard, etc.)</option>
              <option value="gpay">🔐 Google Pay</option>
              <option value="phonepe">📱 PhonePe</option>
              <option value="paytm">💰 PayTM</option>
            </Form.Control>
          </div>

          {/* Card Payment Details */}
          {paymentMethod === "card" && (
            <div style={styles.cardDetailsSection}>
              <Row>
                <Col md={12}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Card Number</label>
                    <Form.Control
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 16) setCardNumber(value);
                      }}
                      isInvalid={cardNumber && !validateCardNumber(cardNumber)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid 16-digit card number.
                    </Form.Control.Feedback>
                  </div>
                </Col>

                <Col md={6}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Expiry Date</label>
                    <Form.Control
                      type="month"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      isInvalid={expiryDate && !validateExpiryDate(expiryDate)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid expiry date.
                    </Form.Control.Feedback>
                  </div>
                </Col>

                <Col md={6}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>CVV</label>
                    <Form.Control
                      type="password"
                      placeholder="•••"
                      value={cvv}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 3) setCvv(value);
                      }}
                      isInvalid={cvv && !validateCvv(cvv)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid CVV (3 digits).
                    </Form.Control.Feedback>
                  </div>
                </Col>
              </Row>
            </div>
          )}

          {/* Payment Buttons */}
          <div style={styles.paymentButtonSection}>
            {paymentMethod === "gpay" && (
              <Button
                variant="outline-dark"
                onClick={() => handlePayment()}
              >
                <FaGooglePay className="me-2" /> Pay with Google Pay
              </Button>
            )}

            {paymentMethod === "phonepe" && (
              <Button
                variant="outline-dark"
                onClick={() => handlePayment()}
              >
                <FaMobileAlt className="me-2" /> Pay with PhonePe
              </Button>
            )}

            {paymentMethod === "paytm" && (
              <Button
                variant="outline-dark"
                onClick={() => handlePayment()}
              >
                <FaCcVisa className="me-2" /> Pay with PayTM
              </Button>
            )}

            {paymentMethod === "card" && (
              <Button
                variant="primary"
                onClick={() => handlePayment(true)}
              >
                Confirm Booking
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookingPage;