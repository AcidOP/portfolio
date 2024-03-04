import Hero from '@/components/Hero/Hero';
import WhatIDo from '@/components/Hero/WhatIDo';
import Testimonials from '@/components/Testimonials';
import Works from '@/components/Works';

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Works />
      <Testimonials />
    </>
  );
};

export default Homepage;
