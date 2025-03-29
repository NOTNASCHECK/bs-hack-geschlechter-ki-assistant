import fs from 'fs';
import path from 'path';

export async function POST(request) {
  console.log('POST request für Guideline_Empfehlungen.csv empfangen');
  
  try {
    const filePath = path.join(process.cwd(), 'Paper', 'Guideline_Empfehlungen.csv');
    const content = await fs.promises.readFile(filePath, 'utf-8');

    // Hier können Sie die Logik hinzufügen, um die CSV-Daten zu verarbeiten
    const lines = content.split('\n');
    const guidelines = lines.map(line => line.split(',')); // Beispiel für CSV-Verarbeitung

    const response = new Response(JSON.stringify(guidelines), { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://bs-hack-geschlechter-ki-assistant-h25sxdux2.vercel.app',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
    
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Fehler beim Abrufen der Guideline-Daten' }), { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://bs-hack-geschlechter-ki-assistant-h25sxdux2.vercel.app',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 