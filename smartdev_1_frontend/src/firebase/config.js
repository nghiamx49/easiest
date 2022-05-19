import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJD6MCo4JxsJeQ32vqw4r7MdgfgQomOCY",
  authDomain: "e-commerce-2aee1.firebaseapp.com",
  projectId: "e-commerce-2aee1",
  storageBucket: "e-commerce-2aee1.appspot.com",
  messagingSenderId: "398410018775",
  appId: "1:398410018775:web:f58a96215c3369893a6592",
  measurementId: "G-5258ZQ83JE",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as defaul };
