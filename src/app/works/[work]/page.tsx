import { FC } from 'react';

import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
import { getWorkBySlug, getWorkSlugs } from '@/utils/works';

import { notFound } from 'next/navigation';

interface PageProps {
  params: { work: string };
}

export const generateStaticParams = async () => {
  const slugs = getWorkSlugs();
  return slugs.map(slug => ({ work: slug }));
};

const Work: FC<PageProps> = ({ params: { work } }) => {
  const workData = getWorkBySlug(work);

  if (!workData) notFound();

  return (
    <div className='mx-auto w-full max-w-3xl'>
      <GoBackButton />

      {/* @ts-ignore */}
      <Header {...workData.data} cover={workData.data.image} />

      <article className='prose mx-auto w-full max-w-3xl prose-a:no-underline'>
        <Mdx content={workData.content} />
      </article>
    </div>
  );
};

export default Work;
