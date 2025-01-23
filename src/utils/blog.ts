import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

const BLOGS = allBlogs.sort((a, b) => {
  return compareDesc(a.date, b.date);
});

export const POSTS_PER_PAGE = 6;
export const TOTAL_BLOGS = BLOGS.length;
export const TOTAL_PAGES = Math.ceil(TOTAL_BLOGS / POSTS_PER_PAGE);

export const getBlogBySlug = (slug: string) => {
  return BLOGS.find(blog => blog.url === slug);
};

export const blogSlugs = BLOGS.map(blog => blog.slug);

export const getBlogTags = () => {
  const tagCounts: { [key: string]: number } = {};
  const tags = BLOGS.map(blog => blog.tags).filter(
    tags => tags !== undefined,
  );

  tags.forEach(item => {
    item.forEach(tag => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  return tagCounts;
};

export const getBlogsByTag = (tag: string) => {
  return BLOGS.filter(blog => blog.tags && blog.tags.includes(tag));
};

export const getXRecentBlogs = (x: number) => BLOGS.slice(0, x);

export const blogsPerPage = (current: number) => {
  const startIndex = POSTS_PER_PAGE * (current - 1);
  const endIndex = POSTS_PER_PAGE * current;

  return BLOGS.slice(startIndex, endIndex);
};
