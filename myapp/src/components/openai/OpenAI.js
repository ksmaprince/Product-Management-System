// src/OpenAI.js
import axios from 'axios';


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
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
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
