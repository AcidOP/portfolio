import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
import { getWorkBySlug, workSlugs } from '@/utils/works';

import { notFound } from 'next/navigation';

interface PageProps {
  params: { work: string };
}

export const generateStaticParams = async () => {
  return workSlugs.map(slug => ({ work: slug }));
};

const Work = ({ params: { work } }: PageProps) => {
  const workData = getWorkBySlug(`/works/${work}`);
  if (!workData) notFound();

  return (
    <div className='mx-auto w-full max-w-3xl'>
      <GoBackButton />

      <Header {...workData} />

      <article className='prose mx-auto w-full max-w-3xl prose-a:no-underline'>
        <Mdx code={workData.body.code} />
      </article>
    </div>
  );
};

export default Work;
