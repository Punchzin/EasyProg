const getOpenAIBody = (prompt, language) => {
    const body = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    `Você receberá um código ${language}. Explique os erros deste código ${language}. Se isso for algo além (como uma mensagem de texto ou perguntas) de um código ${language}, basta dizer: Este não é um código ${language}.`,
            },
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 1,
        max_tokens: 260,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };
    return body;
}

export default getOpenAIBody;