import { createGlobalStyle, styled } from "styled-components";
import BACKGROUND_LINES from "../../assets/images/background-lines.svg";
import CodeEditor from "@uiw/react-textarea-code-editor";

export const GlobalStyles = createGlobalStyle`
  .w-tc-editor-text {
    z-index: 200 !important;
  }

  .w-tc-editor-preview {
    position: absolute !important;
  }

  .w-tc-editor {
    overflow-y: auto !important;
  }

  .inputOpened {
    transform: scale(.95);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background: url(${BACKGROUND_LINES});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
  transition: all 0.3s;
`;

export const WrapperItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  background: #19242f;
  border: 1px solid rgba(50, 59, 69, 0.8);
  border-radius: 4px;
  position: relative;
  transition: all 0.5s;
  opacity: 1;
`;

export const InputHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  p {
    font-size: 12px;
    font-weight: 600;
    color: #9e9ea0;

    span {
      color: rgba(11, 240, 213, 1);
    }
  }

  h1 {
    font-size: 22px;
  }
`;

export const DescriCode = styled.div`
  color: #fff;
  font-size: 14px;
  display: flex;
`;

export const CodeActions = styled.div`
  display: flex;
  gap: 0.1rem;
`;

export const CodeAction = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: transparent;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid transparent;
  transition: all 0.3s;

  i {
    font-size: 1.4rem;
    color: #fff;
    transition: all 0.3s;
  }
`;

export const TextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  min-width: 140px;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  z-index: 99;

  white-space: nowrap;
  transition: all 0.3s;

  opacity: 0.6;
  border-radius: 4px;
  border: 1px solid #0bf0d5;
  color: #ffff;
  background: rgba(11, 240, 213, 0.2);
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CodeSection = styled(CodeEditor)`
  width: 100% !important;
  height: 100% !important;
  background-color: transparent !important;
  font-size: 18px !important;
  font-family: "Space Grotesk", sans-serif !important;
  caret-color: #0bf0d5;
`;

export const LineNumbers = styled.div`
  height: 100%;
  font-size: 18px;
  color: #555;
  white-space: pre-wrap;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-left: 1.2rem;
  padding-top: 1.6rem;
`;

export const LineNumber = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  font-family: "Space Grotesk", sans-serif;
`;

export const CodeContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;
