import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUTdSUVYnoABDbLq4mTq1gsoBARXcn3CQ",
  authDomain: "react-netflix-clone-7ada8.firebaseapp.com",
  projectId: "react-netflix-clone-7ada8",
  storageBucket: "react-netflix-clone-7ada8.appspot.com",
  messagingSenderId: "362370918332",
  appId: "1:362370918332:web:ea43a8d090071c6918edb9",
  measurementId: "G-L1R3GVC2WL"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
