import Bento from '@/components/hero/bento';
import Hero from '@/components/hero/hero';
import WhatIDo from '@/components/hero/what-i-do';
import Testimonials from '@/components/testimonials';
import Works from '@/components/works';

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
