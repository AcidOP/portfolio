import Bento from '@/components/Hero/Bento';
import Hero from '@/components/Hero/Hero';
import WhatIDo from '@/components/Hero/WhatIDo';
import Testimonials from '@/components/Testimonials';
import Works from '@/components/Works';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Bento />
      <WhatIDo />
      <Works />
      <Testimonials />
    </>
  );
};

export default Homepage;
