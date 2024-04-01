import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import { compareDesc } from 'date-fns';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src', 'data', 'blogs');

const sortBlogsByDate = (blogs: any[]) => {
  return blogs.sort((a, b) => {
    return compareDesc(a.data.date, b.data.date);
  });
};

// Returns only the frontmatter/metadata
export const allBlogsMeta = () => {
  const files = readdirSync(blogDirectory);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));

  const parsedBlogs = mdxFiles.map(file => {
    const slug = file.replace('.mdx', '');

    const markdownWithMetadata = readFileSync(
      path.join(blogDirectory, file),
      'utf-8',
    );

    const { data } = matter(markdownWithMetadata);

    data.slug = slug;

    if (!data.cover) {
      data.cover =
        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    return {
      data,
    };
  });

  const removeDrafts = parsedBlogs.filter(blog => !blog.data.draft);
  const sortedBlogs = sortBlogsByDate(removeDrafts);

  return sortedBlogs;
};

export const getBlogBySlug = (slug: string) => {
  const file = slug + '.mdx';
  const filePath = path.join(blogDirectory, file);

  if (!existsSync(filePath)) {
    return null;
  }

  const markdownWithMetadata = readFileSync(filePath, 'utf8');

  const { data, content } = matter(markdownWithMetadata);

  return {
    data,
    content,
  };
};

export const getAllBlogSlugs = () => {
  const blogs = allBlogsMeta();
  return blogs.map(blog => blog.slug);
};
