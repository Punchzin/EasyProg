import React, { useEffect } from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import useReaderFile from "../../hooks/useReaderFile";
import { useState, createContext } from "react";

export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState("");
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { handleFileContent, fileContent } = useReaderFile();

  useEffect(() => {
    setInputText(fileContent);
  }, [fileContent])
  
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeText = (value) => {
    handleFileContent(value);
    setInputText(value);
  }

 const API_KEY = "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";
 async function callOpenAIAPI() {
   console.log("Calling the OpenAI API");

   const APIBody = {
     model: "gpt-3.5-turbo",
     messages: [
      {
      role: "system",
      content: "You will be provided with a python code.Explain the errors of this python code. If this is something beyond (like a text message or questions) a python code, just say: This is not a Python code. "
    },
    {
      role:"user",
      content: inputText
    }
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
    // tem que criar um return fora to then pra poder gravar a resposta numa const e poder usar no codeContext
    //se tentar usar const dentro do then, nao da pra usar fora dps


  return (
    <CodeContext.Provider>
      <React.Fragment>
        <Style.GlobalStyles />
        <Style.Main>
          <Aside />
          <Style.Wrapper>
            <Style.HeaderContainer>
              <Header />
              <Tabs>
                <Tab />
              </Tabs>
            </Style.HeaderContainer>
            <Style.Content>
              <Style.Container className={isOpen && "inputOpened"}>
                <Style.WrapperItem>
                  <Style.InputHeader>
                    <p>
                      Linguagem escolhida: <span>Python</span>
                    </p>
                    <h1>Análises de Códigos</h1>
                  </Style.InputHeader>
                  <Style.CodeActions>
                    <Style.TextButton
                      onClick={() => {
                        setPlayIsSelected((prev) => !prev);
                        callOpenAIAPI();
                      }}
                    >
                      <CodeAction
                        actionIcon="ri-play-fill"
                        actionTitle="Iniciar"
                        type="button"
                        actionIsSelected={playIsSelected}
                      />
                      <p>Executar código</p>
                    </Style.TextButton>
                  </Style.CodeActions>
                </Style.WrapperItem>
                <Style.ContentBody>
                  <Style.CodeSection
                    value={inputText}
                    language="python"
                    placeholder="Insira seu código Python."
                    onChange={(event) => handleChangeText(event.target.value)}
                    padding={24}
                  />
                </Style.ContentBody>
              </Style.Container>
              <Output isOpen={isOpen} handleOpen={handleOpen} />
            </Style.Content>
          </Style.Wrapper>
        </Style.Main>
      </React.Fragment>
    </CodeContext.Provider>
  );
};

export default Code;
