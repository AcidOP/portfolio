import Calendly from '@/components/calendly';

import Container from '@/components/container';
import config from '@/data/config';

const ContactPage = () => {
  const { name } = config;

  return (
    <Container className='my-28 flex flex-col items-start justify-between lg:my-60 lg:flex-row'>
      <div className='w-full font-medium lg:w-3/5'>
        <p className='text-3xl'>
          I&apos;d love to get to know about you, your business, project or
          idea — feel free to drop a line or give a call.
        </p>

        <div className='my-16 flex flex-col justify-between space-y-8 lg:flex-row lg:space-y-0'>
          <div>
            <h2 className='text-xl font-semibold opacity-60'>Email</h2>
            <a href='mailto:acid@acidop.codes' className='text-3xl'>
              acid@acidop.codes
            </a>
          </div>

          <div>
            <h2 className='text-xl font-semibold opacity-60'>Phone</h2>
            <a href='tel:+916297988249' className='text-3xl'>
              (+91) 629 798 8249
            </a>
          </div>
        </div>
      </div>

      <Calendly name={name} url={config.calendlyUrl} />
    </Container>
  );
};

export default ContactPage;
