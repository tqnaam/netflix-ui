import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXw4GzMQrT86PJZDg7OtifmckRtYbZfX0",
  authDomain: "react-netflix-clone-832d9.firebaseapp.com",
  projectId: "react-netflix-clone-832d9",
  storageBucket: "react-netflix-clone-832d9.appspot.com",
  messagingSenderId: "1035142648074",
  appId: "1:1035142648074:web:379bbe292ec25033766af3",
  measurementId: "G-HJYBTWYXNX",
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
