import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDRZUs-mLECG6410FHw4uKrTqh6uGsx98I",
    authDomain: "ecommerce-ivan-react.firebaseapp.com",
    projectId: "ecommerce-ivan-react",
    storageBucket: "ecommerce-ivan-react.appspot.com",
    messagingSenderId: "726785349303",
    appId: "1:726785349303:web:782d64bc3ec49f3a99df32",
    measurementId: "G-7G24JJHBYL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)