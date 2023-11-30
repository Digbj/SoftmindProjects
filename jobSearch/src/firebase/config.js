import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBThDGE2BtkOBr8o9tePeaco-6lDPEacQs",
  authDomain: "job-listing-2670b.firebaseapp.com",
  projectId: "job-listing-2670b",
  storageBucket: "job-listing-2670b.appspot.com",
  messagingSenderId: "781713625872",
  appId: "1:781713625872:web:c46db019c5e2b7e8ac8b95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export {fireDB};






