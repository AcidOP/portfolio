import Bento from '@/components/hero/Bento';
import Hero from '@/components/hero/Hero';
import WhatIDo from '@/components/hero/WhatIDo';
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
