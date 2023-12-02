/* eslint-disable react/prop-types */
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createContext } from "react";
import firebaseConfig from "../config/firebase-config";
import { toast } from "react-toastify";
import {
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  setForm: () => {},
  userdata: {},
  isLoading: false,
  isRegister: false,
  handleLogin: () => {},
  setIsRegister: () => {},
  handleRegister: () => {},
  handleSignOut: () => {},
  signed: false,
});

const ERROR_CODES = [
  "auth/wrong-password",
  "auth/invalid-login-credentials",
  "auth/user-not-found",
];

export const AuthProvider = ({ children }) => {
  const [form, setForm] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { email, password, confirmPassword } = form;

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // EXP: get access token from cookies
  const accessToken = Cookies.get("access-token");

  // EXP: login with email and password
  const handleLogin = async () => {
    if (!email.value || !password.value) return;

    try {
      setIsLoading(true);
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      setUserData(userCredentials.user);
      Cookies.set("access-token", userCredentials?.user?.refreshToken, {
        expires: 1,
      });
      alert("Usuário logado com sucesso!");
    } catch (error) {
      if (ERROR_CODES.includes(error.code)) {
        toast.error("Falha na autenticação", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // EXP: register with email and password
  const handleRegister = async () => {
    if (!email.value || !password.value || !confirmPassword.value) return;
    if (password.value !== confirmPassword.value) return;

    try {
      setIsLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      setUserData(userCredentials.user);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // EXP: sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserData({});
      Cookies.remove("access-token");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setForm,
        userData,
        isLoading,
        isRegister,
        handleLogin,
        setIsRegister,
        handleSignOut,
        handleRegister,
        signed: !!accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
