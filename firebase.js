// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3gYvP0wVZJJtWpUhU14gO-tVAAsifGBw",
  authDomain: "mawk8cianan.firebaseapp.com",
  projectId: "mawk8cianan",
  appId: "1:105859300929:web:9b8743734c123553abd0c0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
