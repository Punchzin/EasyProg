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
import { useNavigate } from "react-router-dom";

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
  "auth/too-many-requests",
  "auth/email-already-in-use",
];

const TIMOUT_REDIRECT = 2000;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

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
        email?.value,
        password?.value
      );
      setUserData(userCredentials?.user);
      Cookies.set("access-token", userCredentials?.user?.refreshToken, {
        expires: 1,
      });
      toast.success("Logado com sucesso!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setTimeout(() => {
        navigate("/overview");
      }, TIMOUT_REDIRECT);
    } catch (error) {
      if (ERROR_CODES.includes(error.code)) {
        toast.error("Falha na autenticação.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      console.error(
        "An unexpected error occurred while authenticating, please try again later."
      );
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
        email?.value,
        password?.value
      );
      setUserData(userCredentials?.user);
      Cookies.set("access-token", userCredentials?.user?.refreshToken, {
        expires: 1,
      });
      toast.success("Usuário criado com sucesso!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setTimeout(() => {
        navigate("/overview");
      }, TIMOUT_REDIRECT);
    } catch (error) {
      console.error(
        "An unexpected error occurred while authenticating, please try again later."
      );
      if (ERROR_CODES.find((code) => code === error.code)) {
        toast.error("Esse e-mail já está em uso.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }
      if (ERROR_CODES.includes(error.code)) {
        toast.error("Falha na autenticação", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
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
      toast.error("Ocorreu um erro inesperado ao sair. Tente mais tarde.", {
        position: toast.POSITION_RIGHT,
      });
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
