import Groq from "groq-sdk";

const groq = new Groq({ apiKey: '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' , dangerouslyAllowBrowser: true});


export async function sendToLlama(messagesLength,clientMessage,addMessageReference) {

  const chatCompletion = await getGroqChatCompletion(clientMessage);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  addMessageReference(messagesLength+1,chatCompletion.choices[0]?.message?.content || "",true);
}

export async function getGroqChatCompletion(data) {
  console.log(data);
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: data
      },
    ],
    model: "llama3-8b-8192",
  });
}