import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  const handleGuestLogin = () => {
    alert("Continuing as Guest...");
    navigate("/home");
  };

  return (
    <div className="auth-container" style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/cricket-equipment-digital-art_23-2151761238.jpg?semt=ais_hybrid')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width:"100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
          <button type="submit">Login</button>
        </form>
        <button className="guest-login" onClick={handleGuestLogin} style={{backgroundColor:"black"}}>Continue as Guest</button>
        <p>
          Don't have an account? <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
