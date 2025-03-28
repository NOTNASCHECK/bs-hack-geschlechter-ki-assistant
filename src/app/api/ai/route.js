import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'your_api_key';
const client = new Mistral({ apiKey: apiKey });

export async function GET() {
  try {
    const chatResponse = await client.chat.complete({
      model: 'mistral-tiny',
      messages: [{ role: 'user', content: 'Was ist der beste französische Käse?' }],
    });
    return new Response(JSON.stringify(chatResponse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Fehler beim Abrufen der Antwort' }), { status: 500 });
  }
}

export async function POST(request) {
    console.log('POST request received');
  const { messages } = await request.json();
  try {
    const chatResponse = await client.chat.complete({
      model: 'mistral-tiny',
      messages: messages,
    });
    return new Response(JSON.stringify(chatResponse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Fehler beim Abrufen der Antwort' }), { status: 500 });
  }
}
