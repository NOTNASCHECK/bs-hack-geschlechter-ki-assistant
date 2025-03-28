import fs from 'fs';
import path from 'path';
import { Document } from 'langchain/document';
import { Mistral } from '@mistralai/mistralai';
import cors from 'cors';

const apiKey = process.env.MISTRAL_API_KEY || 'your_api_key';
const client = new Mistral({ apiKey: apiKey });

// CORS Middleware
const corsOptions = {
  origin: '*', // Erlaube alle Ursprünge oder spezifiziere eine Liste von erlaubten Ursprüngen
};

export async function POST(request) {
  // Wende CORS an
  cors(corsOptions)(request, {}, () => {});

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

    return new Response(JSON.stringify(chatResponse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Fehler beim Abrufen der Antwort' }), { status: 500 });
  }
}
