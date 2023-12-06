import { createGlobalStyle } from "styled-components";

export const CSSGlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
    color: #fff;
  }

  #root {
    background-color: #0f1923;
    width: 100%;
    height: 100vh;
  }
  
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #19222c;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(50, 59, 69, 0.8);
    border-radius: 4px;
  }
  
  .toastfy {
    background-color: #142431 !important;
    border-top: 1px solid #0e4447;
    border-radius: 4px;
    font-size: .8rem;

    .Toastify__progress-bar {
        height: 2px;
    }
  } 
  
  .ͼ1o, .ͼ1o .cm-gutters {
    background: #19242f;
  }
  
`;
