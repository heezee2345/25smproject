async function compareWithGPT(article1, article2) {    
    const prompt = `
        Compare these two articles and provide an analysis:
        
        ARTICLE 1:
        ${article1}
        
        ARTICLE 2:
        ${article2}
        
        Please analyze the tone, perspective, key points, and differences between these articles.
    `;
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": prompt}],
            temperature: 0.7,
        }),
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
}