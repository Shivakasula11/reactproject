
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import cricketer from "./box1/images/signformimg.jpg"
// // import { width } from "@fortawesome/free-solid-svg-icons/fa0";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//     navigate("/");
//     // Add logic for authentication here
//   };

//   const styles = {
//     app: {
//       fontFamily: "Arial, sans-serif",
//       textAlign: "center",
//       marginTop: "50px",
//     },

//     loginForm: {
//       height: "60vh",
//       width: "400px",
//       margin: "0 auto",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     heading: {
//       marginBottom: "20px",
//     },
//     formGroup: {
//       marginBottom: "15px",
//       textAlign: "left",
//     },
//     label: {
//       display: "block",
//       marginBottom: "5px",
//     },
//     input: {
//       width: "100%",
//       padding: "8px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//    cricketer1 :{
//       height:"100%",
//       width:"100%",
//     }
//   };

//   return (

//     <div style={styles.app}>
//           <div className="cricketer1" style={{
//           backgroundImage: `url(${cricketer})`,
//           ...styles.cricketer1, // Merging inline and external styles
//         }} >
//       <div style={styles.loginForm}>
//         {/* <div className="" style={{backgroundImage: `url(${cricketer})`}}> */}
//         <h2 style={styles.heading}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="username">
//               Username:
//             </label>
//             <input
//               style={styles.input}
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="password">
//               Password:
//             </label>
//             <input
//               style={styles.input}
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             style={styles.button}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Login;   




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import cricketer from "./box1/images/signformimg.jpg";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", formData);
//     alert("Login Successful!");
//     navigate("/");
//   };

//   const handleGuestLogin = () => {
//     alert("Logged in as Guest");
//     navigate("/");
//   };

  // const styles = {
  //   app: {
  //     fontFamily: "Arial, sans-serif",
  //     textAlign: "center",
  //     marginTop: "50px",
  //   },
  //   loginContainer: {
  //     height: "100vh",
  //     width: "100vw",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundImage: `url(${cricketer})`,
  //     backgroundSize: "100% 100%", // Ensures image matches container
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //   },
  //   loginForm: {
  //     width: "90%",
  //     maxWidth: "400px",
  //     padding: "25px",
  //     backgroundColor: "rgba(255, 255, 255, 0.9)",
  //     borderRadius: "8px",
  //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  //     textAlign: "center",
  //   },
  //   formGroup: {
  //     marginBottom: "15px",
  //     textAlign: "left",
  //   },
  //   label: {
  //     display: "block",
  //     marginBottom: "5px",
  //   },
  //   input: {
  //     width: "100%",
  //     padding: "10px",
  //     border: "1px solid #ccc",
  //     borderRadius: "4px",
  //   },
  //   button: {
  //     width: "100%",
  //     padding: "12px",
  //     backgroundColor: "#007bff",
  //     color: "white",
  //     border: "none",
  //     borderRadius: "4px",
  //     cursor: "pointer",
  //     marginTop: "10px",
  //   },
  //   signUpText: {
  //     marginTop: "15px",
  //   },
  //   signUpLink: {
  //     color: "#007bff",
  //     cursor: "pointer",
  //     textDecoration: "underline",
  //   },
  //   guestButton: {
  //     width: "100%",
  //     padding: "12px",
  //     backgroundColor: "#28a745",
  //     color: "white",
  //     border: "none",
  //     borderRadius: "4px",
  //     cursor: "pointer",
  //     marginTop: "10px",
  //   },
  //   mediaQueries: `
  //     @media (max-width: 768px) {
  //       .loginContainer {
  //         height: 100vh;
  //         width: 100vw;
  //         background-size: cover;
  //       }
  //       .loginForm {
  //         width: 90%;
  //       }
  //     }
  //     @media (max-width: 480px) {
  //       .loginForm {
  //         width: 95%;
  //       }
  //     }
  //   `,
  // };

//   return (
//     <div style={styles.loginContainer}>
//       <style>{styles.mediaQueries}</style>
//       <div style={styles.loginForm}>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="username">Username:</label>
//             <input
//               style={styles.input}
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label} htmlFor="password">Password:</label>
//             <input
//               style={styles.input}
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit" style={styles.button}>Login</button>
//         </form>
//         <p style={styles.signUpText}>
//           Don't have an account? <span style={styles.signUpLink} onClick={() => navigate("/signup")}>Sign Up</span>
//         </p>
//         <button style={styles.guestButton} onClick={handleGuestLogin}>Guest Login</button>
//       </div>
//     </div>
//   );
// }

// export default Login;  
//  signup problem



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import "./login.css";

// function Login() {
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
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       alert("Login Successful!");
//       navigate("/");
//     } catch (error) {
//       setError("Invalid email or password.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {error && <p className="error-text">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
//       </p>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import "./login.css";

// function Login() {
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
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       alert("Login Successful!");
//       navigate("/");
//     } catch (error) {
//       setError("Invalid email or password.");
//     }
//   };

//   const handleGuestLogin = () => {
//     alert("Continuing as Guest...");
//     navigate("/home");
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {error && <p className="error-text">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
//         <button type="submit">Login</button>
//       </form>
//       <button className="guest-login" onClick={handleGuestLogin}>Continue as Guest</button>
//       <p>
//         Don't have an account? <span className="link" onClick={() => navigate("/signup")}>Sign Up</span>
//       </p>
//     </div>
//   );
// }

// export default Login;






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
