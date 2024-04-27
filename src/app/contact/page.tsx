import Calendly from './_components/calendly';

import config from '@/data/config';

const ContactPage = () => {
  const { name } = config;

  return (
    <>
      <section className='my-60 flex items-start justify-between'>
        <div className='w-3/5 font-medium'>
          <p className='text-3xl'>
            I&apos;d love to get to know about you, your business, project
            or idea — feel free to drop a line or give a call.
          </p>

          <div className='mt-16 flex justify-between'>
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

        <Calendly name={name} url='https://calendly.com/acidop/30min' />
      </section>
    </>
  );
};

export default ContactPage;
