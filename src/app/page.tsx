import Bento from '@/components/hero/bento';
import Hero from '@/components/hero/hero';
import WhatIDo from '@/components/hero/what-i-do';
import Works from '@/components/hero/works';
import Testimonials from '@/components/testimonials';

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
