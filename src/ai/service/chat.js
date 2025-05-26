









import { genAI } from "..";






async function aichat(message) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: message,
  });
  return response.text;
}


export default  aichat;