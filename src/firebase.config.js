import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC7-7z8ao5FRTpy2ny24UhQLFk4zAp-eQ",
  authDomain: "farmdew-4e4cc.firebaseapp.com",
  projectId: "farmdew-4e4cc",
  storageBucket: "farmdew-4e4cc.appspot.com",
  messagingSenderId: "303213985358",
  appId: "1:303213985358:web:28d09de4c2fc6074c8cd1f",
  measurementId: "G-401FCNZF6X"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
