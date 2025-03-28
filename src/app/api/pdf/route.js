import fs from 'fs';
import path from 'path';

export async function GET() {
  const directoryPath = path.join(process.cwd(), 'Paper');

  try {
    const files = await fs.promises.readdir(directoryPath);
    const fileList = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile());
    return new Response(JSON.stringify(fileList), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Fehler beim Lesen des Verzeichnisses' }), { status: 500 });
  }
}

