
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
