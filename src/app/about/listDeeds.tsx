import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

import type { ReactNode } from 'react';

type Skill = {
  title: ReactNode | string;
  description: ReactNode | string;
  image?: string;
};

const skills: Skill[] = [
  {
    title: (
      <>
        Living in
        <RoughNotation
          type='circle'
          padding={10}
          strokeWidth={2}
          color='#6d28d9'
        >
          <svg
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='2'
            className='inline-block'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
            <circle cx='12' cy='10' r='3' />
          </svg>{' '}
          India,
        </RoughNotation>{' '}
        I&apos;m a university student by the day. Otherwise I&apos;m just
        another dreamy guy trying to comprehend how the 🌍 works.
      </>
    ),
    description: (
      <>
        With 4 years of programming experience, I&apos;m committed to{' '}
        <Link href='/works' className='text-violet-600 underline'>
          helping organizations
        </Link>{' '}
        with custom software and web-apps, tailored to the unique
        requirements of each client.
        <br />
        <br />I contribute to the developer community by{' '}
        <Link href='/blogs' className='text-violet-600 underline'>
          sharing experiences
        </Link>{' '}
        through writing. With my blogs I hope to help both new and seasoned
        programmers.
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: (
      <>
        Driven by a{' '}
        <RoughNotation
          type='underline'
          color='#6d28d9'
          strokeWidth={3}
          multiline
        >
          passion for engineering
        </RoughNotation>
        , I develop carefully constructed experiences that are
        fundamentally human.
      </>
    ),
    description: (
      <>
        Driven by a profound love of engineering, creating enchanting
        design experiences that are inherently human brings me great joy.
        <br />
        <br />I work to create products that not only fulfill technical
        specifications but also make their consumers&apos; lives easier and
        more enjoyable.
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: (
      <>
        Developing ideas that are significant, dependable, and
        long-lasting, I hope to have a lasting influence on the world.
      </>
    ),
    description: (
      <>
        Each project I undertake is driven by{' '}
        <RoughNotation
          type='underline'
          multiline
          color='#6d28d9'
          strokeWidth={2}
        >
          commitment to innovation and quality
        </RoughNotation>
        , ensuring that the solutions I create address real needs.
        <br />
        <br />
        Through careful{' '}
        <RoughNotation type='highlight' color='#c4b5fd' strokeWidth={3}>
          planning
        </RoughNotation>
        ,{' '}
        <RoughNotation type='highlight' color='#c4b5fd' strokeWidth={3}>
          design
        </RoughNotation>
        , and{' '}
        <RoughNotation type='highlight' color='#c4b5fd' strokeWidth={3}>
          testing
        </RoughNotation>
        , I aim to produce work that remains relevant and effective.
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1575197478864-c83e1d2a4443?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default skills;
