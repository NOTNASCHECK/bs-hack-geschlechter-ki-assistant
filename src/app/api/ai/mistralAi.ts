import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'your_api_key';

const client = new Mistral({ apiKey: apiKey });

async function getChatResponse() {
  const chatResponse = await client.chat.complete({
    model: 'mistral-tiny',
    messages: [{ role: 'user', content: 'What is the best French cheese?' }],
  });
  return chatResponse;
}
