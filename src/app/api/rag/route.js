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
    const directoryPath = path.join(process.cwd(), 'Paper');
    const files = await fs.promises.readdir(directoryPath);
    const documents = [];

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const content = await fs.promises.readFile(filePath, 'utf-8');
      documents.push(new Document({ content }));
    }

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