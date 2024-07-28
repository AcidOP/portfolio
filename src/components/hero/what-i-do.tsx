import Container from '../Container';
import { inter_700 } from '../fonts';
import Heading from '../heading';
import StackedCard from './stacked-card';

import { cn } from '@/utils/cn';

const WhatIDo = () => {
  const skills = [
    {
      title: 'Development',
      description:
        'I create unique, custom-coded websites that are tailored to your brand. I focus on scalability, performance, accessibility, and engaging animations for a memorable experience.',
      works: ['React Development', 'Motion & Animations', 'Accessibility'],
    },
    {
      title: 'Web Design',
      description:
        'I design user-centric websites that enhance your brand and drive business goals. Clean typography and minimal layouts has my full attention to create a compelling online presence.',
      works: ['Responsive Design', 'Wireframing', 'UI/UX Design'],
    },
    {
      title: 'SEO',
      description:
        'Beyond crafting visually memorable websites, I also optimize your online presence to elevate your visibility in search rankings so your voices can be heard in the digital landscape.',
      works: ['On-Page SEO', 'Technical SEO', 'Content Creation'],
    },
  ];

  return (
    <Container className='mb-36'>
      <div className='flex flex-col justify-between py-36 lg:flex-row'>
        <Heading text='What I Do.' />

        <h3
          className={cn(
            'mt-7 text-xl opacity-70 lg:mt-0 lg:max-w-2xl lg:text-3xl',
            inter_700.className,
          )}
        >
          Dedicated to deliver a digital experience that not only serves a
          great purpose, but give your business an unfair advantage.
        </h3>
      </div>

      <div className='space-y-24'>
        {skills.map((skill, index) => (
          <StackedCard key={index} index={index} {...skill} />
        ))}
      </div>
    </Container>
  );
};

export default WhatIDo;
