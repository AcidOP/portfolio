import { allWorks } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const WORKS = allWorks.sort((a, b) => {
  return compareDesc(a.date, b.date);
});

export const getXRecentWorks = (x: number) => WORKS.slice(0, x);

export const workSlugs = WORKS.map(work => work.slug);

export const getWorkBySlug = (slug: string) => {
  const blog = WORKS.find(work => work.url === slug);
  return blog;
};
