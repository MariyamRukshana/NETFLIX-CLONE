import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7alvJM_x_PZJyBYpxbMFlNqHHJPvyS9Y",
  authDomain: "react-netflix-clone-92cd6.firebaseapp.com",
  projectId: "react-netflix-clone-92cd6",
  storageBucket: "react-netflix-clone-92cd6.appspot.com",
  messagingSenderId: "1095419681273",
  appId: "1:1095419681273:web:e39db9c102faf76f0ac528",
  measurementId: "G-FDJ749PFLT"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
