import fs from 'fs';
import path from 'path';
import { Document } from 'langchain/document';
import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'your_api_key';
const client = new Mistral({ apiKey: apiKey });

export async function POST(request) {
  console.log('POST request received');
  const { messages } = await request.json();

  try {
    const filePath = path.join(process.cwd(), 'JsonSchnipsel', 'schnipsel.json');
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const documents = [new Document({ content })];

    const chatResponse = await client.chat.complete({
      model: 'mistral-tiny',
      messages: messages,
      documents: documents,
    });

    const response = new Response(JSON.stringify(chatResponse), { status: 200 });
    

    return response;
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Fehler beim Abrufen der Antwort' }), { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
