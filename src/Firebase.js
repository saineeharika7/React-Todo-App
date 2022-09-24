
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
        apiKey: "AIzaSyDj9RC3WokGf6HY9jQ58kUbWLeTN1_1jPw",
        authDomain: "todo-app-a7d6d.firebaseapp.com",
        projectId: "todo-app-a7d6d",
        storageBucket: "todo-app-a7d6d.appspot.com",
        messagingSenderId: "68469523423",
        appId: "1:68469523423:web:c999f2d2d5579f6e0c3a6a",
        measurementId: "G-RDT4EEPKJE"
      };
      

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
export default db;
