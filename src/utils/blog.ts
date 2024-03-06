import { readdirSync } from 'fs';
import path from 'path';

const blogDirectory = 'src/data/blogs';

const readFolder = (folder: string) => {
  const files = readdirSync(folder);
  return files.map(file => {
    return path.join(folder, file);
  });
};
