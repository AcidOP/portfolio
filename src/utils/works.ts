import calculateReadingTime from './reading-time';

import { existsSync, readdirSync, readFileSync } from 'fs';
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

export const works = () => {
  const worksDirectory = path.join(process.cwd(), 'src', 'data', 'works');
  const workFiles = readdirSync(worksDirectory);

  const works = workFiles.map(workFile => {
    const filePath = path.join(worksDirectory, workFile);
    const { data, content } = readFile(filePath);

    const coverImageFilename = workFile.split('.')[0] + '.jpg';
    const coverImage = path.join(
      process.cwd(),
      'public',
      'works',
      coverImageFilename,
    );

    if (!existsSync(coverImage)) {
      data.image =
        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else {
      data.image = '/works/' + coverImageFilename;
    }

    const readingTime = calculateReadingTime(content);

    data.slug = workFile.split('.')[0];
    data.time = readingTime;

    return {
      title: data.title,
      description: data.description,
      cover: data.image,
      services: data.services,
      industry: data.industry,
      website: data.website,
      date: data.date,
      content,
      slug: data.slug,
      time: data.time,
    };
  });

  return works;
};

export const getWorkSlugs = () => {
  const allWorks = works();
  return allWorks.map(work => work.slug);
};

export const getWorkBySlug = (slug: string) => {
  const allWorks = works();
  return allWorks.find(work => work.slug === slug);
};
