import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJhjHc9xsxfD8jMRtu0mFmamScGrJzCbs",
  authDomain: "fir-eed0e.firebaseapp.com",
  projectId: "fir-eed0e",
  storageBucket: "fir-eed0e.appspot.com",
  messagingSenderId: "702932216448",
  appId: "1:702932216448:web:d73b9538544b2ff3ca1465",
  measurementId: "G-BE7T69C8Q9",
  databaseURL: "https://fir-eed0e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
