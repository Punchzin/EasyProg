import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const useFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const Login = async (email, password) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        Login
    }
}

export default useFirebase;