import calculateReadingTime from './reading-time';

import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import { compareDesc } from 'date-fns';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src', 'data', 'blogs');

const sortBlogsByDate = (blogs: any[]) => {
  return blogs.sort((a, b) => {
    return compareDesc(a.date, b.date);
  });
};

// Returns only the frontmatter/metadata
export const allBlogsMeta = () => {
  const files = readdirSync(BLOG_DIR);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));

  const parsedBlogs = mdxFiles.map(file => {
    const slug = file.replace('.mdx', '');

    const markdownWithMetadata = readFileSync(
      path.join(BLOG_DIR, file),
      'utf-8',
    );

    const { data } = matter(markdownWithMetadata);

    data.slug = slug;

    if (!data.cover) {
      data.cover =
        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    return { ...data };
  });

  const removeDrafts = parsedBlogs.filter(blog => !blog.draft);
  const sortedBlogs = sortBlogsByDate(removeDrafts);

  return sortedBlogs;
};

export const getBlogBySlug = (slug: string) => {
  const file = slug + '.mdx';
  const filePath = path.join(BLOG_DIR, file);

  if (!existsSync(filePath)) {
    return null;
  }

  const markdownWithMetadata = readFileSync(filePath, 'utf8');

  const { data, content } = matter(markdownWithMetadata);

  const time = calculateReadingTime(content);

  return {
    title: data.title,
    description: data.description,
    cover: data.cover,
    tags: data.tags,
    date: data.date,
    ...data,
    content,
    slug,
    time,
  };
};

export const getAllBlogSlugs = (): string[] => {
  return allBlogs.map(blog => blog.slug);
};

interface TagCount {
  [tag: string]: number;
}

export const getAllBlogTags = () => {
  const tagCount: TagCount = {};

  allBlogs.forEach(blog => {
    if (!blog.tags) return;

    blog.tags.forEach((tag: string) => {
      if (tagCount[tag]) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  return tagCount;
};

export const getBlogsByTag = (tag: string) => {
  return allBlogs.filter(blog => blog.tags && blog.tags.includes(tag));
};

export const allBlogs = allBlogsMeta();
export const getXRecentBlogs = (x: number) => allBlogs.slice(0, x);

export const POSTS_PER_PAGE = 6;
export const TOTAL_PAGES = Math.ceil(allBlogs.length / POSTS_PER_PAGE);

export const blogsPerPage = (current: number) => {
  const startIndex = POSTS_PER_PAGE * (current - 1);
  const endIndex = POSTS_PER_PAGE * current;

  const slicedBlogs = allBlogs.slice(startIndex, endIndex);
  return slicedBlogs;
};
