import { useState } from "react";

const useCallingAPI = () => {
  // eslint-disable-next-line no-unused-vars
  const [inputText, setInputText] = useState("");
  const API_KEY = "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";

  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You will be provided with a python code.Explain the errors of this python code. If this is something beyond (like a text message or questions) a python code, just say: This is not a Python code. ",
        },
        {
          role: "user",
          content: inputText,
        },
      ],

      temperature: 1,
      max_tokens: 260,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
      });
  }

  return {
    callOpenAIAPI,
    API_KEY,
  };
};

export default useCallingAPI;
// tem que criar um return fora to then pra poder gravar a resposta numa const e poder usar no codeContext
//se tentar usar const dentro do then, nao da pra usar fora dps
