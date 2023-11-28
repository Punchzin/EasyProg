/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useEffect } from "react";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase/firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [form, setForm] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [userdata, setUserdata] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    const dataFormatted = user.providerData[0];

    setUserdata({ ...dataFormatted });
    setIsLogged(user ? true : false);
  }, [user]);

  const { email, password, confirmPassword } = form;

  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      return;
    }

    await registerWithEmailAndPassword(email.value, password.value);
  };

  const handleLogin = async () => {
    await logInWithEmailAndPassword(email.value, password.value);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setForm,
        isLogged,
        isRegister,
        handleLogin,
        setIsRegister,
        handleRegister,
        userdata,
        signed : !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
