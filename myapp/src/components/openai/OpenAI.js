// src/OpenAI.js
import axios from 'axios';

const API_KEY = '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'; // Replace with your GPT-3 API key


const OpenAI = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        model:"",
        prompt,
        max_tokens: 250, // You can adjust this as needed
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error interacting with OpenAI API:', error);
    throw error;
  }
};

export default OpenAI;
