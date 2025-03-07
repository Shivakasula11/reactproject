// import { initializeApp } from "firebase/app";
// import { getAuth  } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBkRYurOhjDnYLsd1kLlnY3LMXC23eg9lU",
//   authDomain: "box-cricket-4572e.firebaseapp.com",
//   projectId: "box-cricket-4572e",
//   storageBucket: "box-cricket-4572e.firebasestorage.app",
//   messagingSenderId: "695041258068",
//   appId: "1:695041258068:web:50613c2208de7cbdf6b3c1",
//   databaseURL: "https://box-cricket-4572e-default-rtdb.firebaseio.com/",
//   measurementId: "G-FJL16H2HWB"
// };

// export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);
// export { auth,database };




// // import { initializeApp } from "firebase/app";
// // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// // import { getDatabase, ref, set } from "firebase/database";

// // const firebaseConfig = {
  // apiKey: "AIzaSyBkRYurOhjDnYLsd1kLlnY3LMXC23eg9lU",
  // authDomain: "box-cricket-4572e.firebaseapp.com",
  // projectId: "box-cricket-4572e",
  // storageBucket: "box-cricket-4572e.appspot.com",
  // messagingSenderId: "695041258068",
  // appId: "1:695041258068:web:50613c2208de7cbdf6b3c1",
  // databaseURL: "https://box-cricket-4572e-default-rtdb.firebaseio.com",
  // measurementId: "G-FJL16H2HWB"
// // };

// //  const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// //  const database = getDatabase(app);
// // export { createUserWithEmailAndPassword, signInWithEmailAndPassword,app,auth,database };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkRYurOhjDnYLsd1kLlnY3LMXC23eg9lU",
  authDomain: "box-cricket-4572e.firebaseapp.com",
  projectId: "box-cricket-4572e",
  storageBucket: "box-cricket-4572e.appspot.com",
  messagingSenderId: "695041258068",
  appId: "1:695041258068:web:50613c2208de7cbdf6b3c1",
  databaseURL: "https://box-cricket-4572e-default-rtdb.firebaseio.com",
  measurementId: "G-FJL16H2HWB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
