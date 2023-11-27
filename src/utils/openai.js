const getOpenAIBody = (prompt) => {
    const body = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "Você receberá um código python. Explique os erros deste código python. Se isso for algo além (como uma mensagem de texto ou perguntas) de um código Python, basta dizer: Este não é um código Python.",
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