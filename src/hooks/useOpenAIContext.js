import { useContext } from "react";
import { OpenAIContext } from "../contexts/OpenAIContext";

const useOpenAIContext = () => {
    const context = useContext(OpenAIContext);
    if (!context) {
        throw new Error(
            "useOpenAIContext must be used within a OpenAIContextProvider"
        );
    }
    return context;
}

export default useOpenAIContext;