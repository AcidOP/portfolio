import Hero from '@/components/Hero/Hero';
import StackedCard from '@/components/Hero/StackedCard';
import WhatIDo from '@/components/Hero/WhatIDo';
import config from '@/data/config';

const Homepage = () => {
  const { works } = config;
  return (
    <>
      <Hero />
      <WhatIDo />
      {works.map((work, index) => (
        <StackedCard
          key={index}
          index={index}
          title={work.title}
          description={work.description}
          works={work.works}
        />
      ))}
    </>
  );
};

export default Homepage;
