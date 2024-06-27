import type { Blog, Work } from 'contentlayer/generated';

export type BlogWork = Omit<Blog, 'type'> &
  Omit<Work, 'type'> & {
    type: 'Blog' | 'Work';
  };
