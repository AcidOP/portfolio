import { inter_900 } from '@/components/fonts';
import config from '@/data/config';
import { cn } from '@/utils/cn';

const aboutItems = [
  {
    heading: 'Crafting Charming experiences',
    description:
      'I am a self taught developer with self diagnosed OCD, thereby ensuring that every project I work on is pixel perfect. I love to start a project from zero and ensure it reaches a hundred, while enjoying the process of bringing ideas to life through good design',
  },
  {
    heading: "When I'm not working...",
    description:
      "You can usually find me playing Valorant peacefully on the Mumbai server or debating on twitter about which is the best web framework. I also blog about the most random topic I can think of, so if you are into that, you can check out my blog. I'm also active on Twitter, so feel free to reach out to me there.",
    social: config.socials.find(social => social.name === 'twitter'),
  },
  {
    heading: 'Working remotely from Kolkata, India',
    description:
      "Im always in the search of the perfect balance between work, university and personal life. I'm also creating a SaaS product while struggling to manage time. Whenever I need a break, I usually go out for a walk or play Valorant.",
  },
];

const About = () => {
  return (
    <div className='my-36'>
      <h2
        className={cn(
          'mx-auto grid text-center text-2xl text-gray-700 lg:gap-2 lg:text-5xl',
          inter_900.className,
        )}
      >
        <span>FULLSTACK DEVELOPER &</span>
        <span>A LITTLE BIT OF EVERYTHING...</span>
      </h2>

      <section className='mt-48'>
        {aboutItems.map((item, index) => {
          return (
            <div
              key={item.heading}
              className={cn(
                'flex min-h-96 justify-between gap-16',
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
                index > 0 && 'mt-72',
              )}
            >
              <div className='grid w-3/5'>
                <h3
                  className={cn('text-6xl uppercase', inter_900.className)}
                >
                  {item.heading}
                </h3>
                <p className='text-xl text-gray-600'>{item.description}</p>

                {item.social && (
                  <a
                    href={item.social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cn(
                      'mt-8 inline-block text-4xl uppercase text-violet-500',
                      inter_900.className,
                    )}
                  >
                    Follow me on {item.social.name} &#8599;
                  </a>
                )}
              </div>

              <div className='w-2/5 bg-zinc-100'></div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;
