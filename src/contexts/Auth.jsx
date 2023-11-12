import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase/firebase";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLogged(user ? true : false);
  }, [user]);

  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });

  const { email, password, passwordConfirm, name } = form;

  const handleRegister = async () => {
    await registerWithEmailAndPassword(name, email, password);
  };

  const handleLogin = async () => {
    await logInWithEmailAndPassword(email, password);
  };

  const handleChangeForm = (field, valor) => {
    setForm({ ...form, [field]: valor });
  };

  const CanLogin = form.email.length >= 1 && form.password.length >= 1;
  const CanRegister =
    form.name.length >= 1 &&
    form.email.length >= 1 &&
    form.password.length >= 1 &&
    form.passwordConfirm.length >= 1 &&
    form.password === form.passwordConfirm;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        handleLogin,
        handleRegister,
        handleChangeForm,
        isLoading,
        setIsLoading,
        isRegister,
        setIsRegister,
        CanLogin,
        CanRegister
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
