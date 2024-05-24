'use server';

import { readFileSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const PUBLIC_IMAGE_DIR = join(process.cwd(), 'public');

const getLocalFileBuffer = (filePath: string) => {
  const file = join(PUBLIC_IMAGE_DIR, filePath);
  return readFileSync(file);
};

const getRemoteFileBuffer = async (url: string) => {
  const response = await fetch(url);
  return Buffer.from(await response.arrayBuffer());
};

const getFileBuffer = (src: string) => {
  const isRemote = src.startsWith('http');
  return isRemote ? getRemoteFileBuffer(src) : getLocalFileBuffer(src);
};

const bufferToB64 = (buffer: Buffer) => {
  return `data:image/png;base64,${buffer.toString('base64')}`;
};

export const getPlaceholder = async (filePath: string) => {
  try {
    const originalBuffer = await getFileBuffer(filePath);
    const resizedBuffer = await sharp(originalBuffer)
      .resize(20)
      .toBuffer();
    return {
      src: filePath,
      placeholder: bufferToB64(resizedBuffer),
    };
  } catch {
    return {
      src: filePath,
      placeholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    };
  }
};
