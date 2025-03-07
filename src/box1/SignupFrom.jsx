

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";


// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );
//       console.log("User signed up:", userCredential.user);
//       alert("Signup Successful!");
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup Error:", error);

//       if (error.code === "auth/email-already-in-use") {
//         setError("This email is already registered. Try logging in instead.");
//       } else if (error.code === "auth/weak-password") {
//         setError("Password should be at least 6 characters long.");
//       } else {
//         setError(error.message);
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       {error && <p className="error-text">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>
//         Already have an account?{" "}
//         <span className="link" onClick={() => navigate("/login")}>
//           Login
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Signup;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.css";

function Signup() {
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed up:", userCredential.user);
      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);

      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Try logging in instead.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters long.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/cricket-equipment-digital-art_23-2151761268.jpg?semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="auth-box">
        <h2>Sign Up</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button  type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
