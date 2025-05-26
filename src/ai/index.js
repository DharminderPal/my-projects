import {GoogleGenAI} from '@google/genai';






const GEMINI_API_KEY = "AIzaSyAgg4E22flg-3KCGDLxcumqVCAOALrCwpM";
  export const genAI =  new   GoogleGenAI({
    apiKey: GEMINI_API_KEY
  });