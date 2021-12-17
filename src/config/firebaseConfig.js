// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBTT26LlVm-WF3Tur9d7hs8ZE-YbUdiFLE",
    authDomain: "cryptish-tracker.firebaseapp.com",
    projectId: "cryptish-tracker",
    storageBucket: "cryptish-tracker.appspot.com",
    messagingSenderId: "457611066605",
    appId: "1:457611066605:web:9068de45c5a3646dabe0e4",
    measurementId: "G-4G90SRGYPE"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebaseConfig;