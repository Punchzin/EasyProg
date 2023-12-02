/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";
import getOpenAIBody from "../config/openai-config";

const API_KEY = "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";
const API_ROUTE = "https://api.openai.com/v1/chat/completions";

export const OpenAIContext = createContext();

export const OpenAiProvider = ({ children }) => {
  const [codeRequest, setCodeRequest] = useState("");
  const [codeResponse, setCodeResponse] = useState("");
  const [codeLoading, setCodeLoading] = useState(false);

  const queryOpenAi = async () => {
    try {
      if (!codeRequest) return;

      setCodeLoading(true);

      const response = await axios.post(API_ROUTE, getOpenAIBody(codeRequest), {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
      });

      setCodeResponse(response.data.choices[0].message.content);
    } catch (error) {
      console.log(error);
    } finally {
      setCodeLoading(false);
    }
  };

  const getCodeResponse = async () => {
    queryOpenAi();
  };

  return (
    <OpenAIContext.Provider
      value={{
        codeResponse,
        codeRequest,
        setCodeRequest,
        setCodeResponse,
        getCodeResponse,
        codeLoading,
      }}
    >
      {children}
    </OpenAIContext.Provider>
  );
};
