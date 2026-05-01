import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueFileName = `${Date.now()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    try {
      await writeFile(path.join(uploadDir, uniqueFileName), buffer);
    } catch {
      await import('fs').then(fs => fs.promises.mkdir(uploadDir, { recursive: true }));
      await writeFile(path.join(uploadDir, uniqueFileName), buffer);
    }

    return NextResponse.json({ url: `/uploads/${uniqueFileName}` });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
