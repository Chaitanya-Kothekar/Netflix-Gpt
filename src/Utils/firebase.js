// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhalhPJcxTk6hLdUIntM76JV0TeFhbfX4",
  authDomain: "netflix-gpt-feature.firebaseapp.com",
  projectId: "netflix-gpt-feature",
  storageBucket: "netflix-gpt-feature.appspot.com",
  messagingSenderId: "669909886805",
  appId: "1:669909886805:web:1953168577729b15d871dc",
  measurementId: "G-JJBC56FHE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();