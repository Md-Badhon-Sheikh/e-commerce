
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB8vZSxK4Fi-pszQivQcpxs9GK6HJy3WsA",
  authDomain: "oceanshop-d2795.firebaseapp.com",
  projectId: "oceanshop-d2795",
  storageBucket: "oceanshop-d2795.firebasestorage.app",
  messagingSenderId: "803984234567",
  appId: "1:803984234567:web:601fceba6bdcbfd47f7962",
  measurementId: "G-6F5QCGEZ8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()

export{app, auth}