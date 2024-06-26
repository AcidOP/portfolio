import { allWorks } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const WORKS = allWorks.sort((a, b) => {
  return compareDesc(a.date, b.date);
});

export const getWorkSlugs = () => {
  return WORKS.map(work => work._raw.flattenedPath);
};

export const getWorkBySlug = (slug: string) => {
  const blog = WORKS.find(work => work._raw.flattenedPath === slug);
  return blog;
};
