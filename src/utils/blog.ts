import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

const BLOGS = allBlogs.sort((a, b) => {
  return compareDesc(a.date, b.date);
});

export const POSTS_PER_PAGE = 6;
export const TOTAL_BLOGS = BLOGS.length;

export const TOTAL_PAGES = Math.ceil(TOTAL_BLOGS / POSTS_PER_PAGE);

export const getBlogBySlug = (slug: string) => {
  const blog = BLOGS.find(blog => blog._raw.flattenedPath === slug);
  return blog;
};

export const getAllBlogSlugs = () => {
  return BLOGS.map(blog => blog._raw.flattenedPath);
};

export const getBlogsByTag = (tag: string) => {
  return BLOGS.filter(blog => blog.tags.includes(tag));
};

export const getXRecentBlogs = (x: number) => BLOGS.slice(0, x);

export const blogsPerPage = (current: number) => {
  const startIndex = POSTS_PER_PAGE * (current - 1);
  const endIndex = POSTS_PER_PAGE * current;

  const slicedBlogs = BLOGS.slice(startIndex, endIndex);
  return slicedBlogs;
};
