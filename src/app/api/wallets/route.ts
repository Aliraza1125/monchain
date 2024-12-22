import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'data', 'wallets.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading wallet data:', error); // Log the error
    return NextResponse.json(
      { error: 'Failed to load wallet data' },
      { status: 500 }
    );
  }
}
