import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const readFile = (filePath: string) => {
  const file = readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  return { data, content };
};

export const privacy = readFile(
  path.join(process.cwd(), 'src', 'data', 'privacy-policy.mdx'),
);
