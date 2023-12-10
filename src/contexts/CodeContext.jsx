/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getOpenAIBody from "../config/openai-config";
import {
  LANGUAGE_CONFIG,
  LANGUAGES_AVAILABLE,
} from "../config/language-config";

const API_KEY = "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";
const API_ROUTE = "https://api.openai.com/v1/chat/completions";

export const CodeContext = createContext({
  language: "",
  languageData: {},
  codeLoading: false,
  codeRequest: "",
  codeResponse: "",
  codeLanguages: [],
  setCodeRequest: () => {},
  setCodeResponse: () => {},
  getCodeResponse: () => {},
  handleChangeLanguage: () => {},
  verifyLanguage: () => {},
});

export const CodeProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES_AVAILABLE.python.language);
  const [languageData, setLanguageData] = useState({});
  const [codeRequest, setCodeRequest] = useState("");
  const [codeResponse, setCodeResponse] = useState("");
  const [codeLoading, setCodeLoading] = useState(false);

  const codeLanguages = LANGUAGE_CONFIG;

  const languageStorage = localStorage.getItem("current-lang");

  const verifyLanguage = (currLanguage) => {
    const isVerified = LANGUAGE_CONFIG.find(
      (languageItem) => languageItem.language === currLanguage
    );
    setLanguageData(isVerified);
    return isVerified;
  };

  const handleChangeLanguage = (currLanguage) => {
    if (!verifyLanguage(language) || verifyLanguage(language) === undefined) {
      toast.warn("Linguagem não suportada, tente novamente outro dia.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    localStorage.setItem("current-lang", currLanguage);
    setLanguage(currLanguage);
  };

  const queryOpenAi = async () => {
    try {
      if (!codeRequest) return;
      if (!verifyLanguage(language) || verifyLanguage(language) === undefined) {
        toast.warn("Linguagem não suportada, tente novamente outro dia.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
      }

      setCodeLoading(true);

      toast.info("Procurando por possíveis correções.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      const response = await axios.post(
        API_ROUTE,
        getOpenAIBody(codeRequest, language),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
        }
      );

      setCodeResponse(response.data.choices[0].message.content);
    } catch (error) {
      toast.error(
        "Ocorreu um erro ao tentar procurar possíveis soluções, tente novamente.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
      console.error(
        "An unexpected error occurred when searching for possible solutions to the code."
      );
    } finally {
      setCodeLoading(false);
    }
  };

  const getCodeResponse = async () => {
    queryOpenAi();
  };

  useEffect(() => {
    if (!languageStorage) return;
    setLanguage(verifyLanguage(languageStorage).language);
    setLanguageData(verifyLanguage(languageStorage));
  }, [languageStorage]);

  useEffect(() => {
    verifyLanguage(language);
  }, [language]);

  return (
    <CodeContext.Provider
      value={{
        language,
        languageData,
        codeLoading,
        codeRequest,
        codeResponse,
        codeLanguages,
        setCodeRequest,
        setCodeResponse,
        getCodeResponse,
        handleChangeLanguage,
        verifyLanguage,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};
