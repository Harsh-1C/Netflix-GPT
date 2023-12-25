import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW8wYlWPl4CLEaIicnjFuysZt0H3Md6Uc",
  authDomain: "netflix-gpt-e337f.firebaseapp.com",
  projectId: "netflix-gpt-e337f",
  storageBucket: "netflix-gpt-e337f.appspot.com",
  messagingSenderId: "489260854300",
  appId: "1:489260854300:web:1f28b5c1dcd34b756643d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

