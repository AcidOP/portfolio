'use client';

import BlogCard from '../cards/BlogCard';

import { motion } from 'framer-motion';

import type { Blog } from 'contentlayer/generated';

const ListBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {blogs.map((blog, index) => {
        return (
          <motion.div
            key={blog.slug}
            initial={{ x: '-10%', scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <BlogCard {...blog} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ListBlogs;
