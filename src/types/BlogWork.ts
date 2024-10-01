import type { Blog, Work } from 'contentlayer/generated';

export type BlogWork = Omit<Partial<Blog>, 'type'> &
  Omit<Partial<Work>, 'type'> & {
    type: 'Blog' | 'Work';
  };
