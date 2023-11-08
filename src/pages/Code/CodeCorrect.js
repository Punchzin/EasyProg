import { OpenAI } from 'openai';
import { useInputText } from './Code';

// openai connection

async function correctCode() {
  const { inputText, setInputText } = useInputText();

  const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
  const prompt = `correct and explain the errors of the following incorrect python code:\n\n${inputText}`;

  const response = await openai.complete({
    engine: 'text-davinci-003', // or 'gpt-3.5-turbo'
    prompt: prompt,
    maxTokens: 500,
  });
  console.log(response.choices[0].text);
}

// exporta pro react e chama a função, ta tudo no forefront.
export default correctCode;