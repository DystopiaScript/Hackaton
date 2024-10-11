import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_1jUd77RNdT6aH1Se5AVrYIbM-4KTonw",
  authDomain: "hackathon-12343.firebaseapp.com",
  projectId: "hackathon-12343",
  storageBucket: "hackathon-12343.appspot.com",
  messagingSenderId: "234705109981",
  appId: "1:234705109981:web:08ae22b3958527f83a2c34",
  measurementId: "G-EV1PW4X82J"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);