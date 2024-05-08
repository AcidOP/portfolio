import Script from 'next/script';

const Umami = () => {
  const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

  if (!UMAMI_WEBSITE_ID) return;

  return (
    <Script
      strategy='lazyOnload'
      src='/stats/script.js' // bypass ad-blockers using vercel rewrites
      data-website-id={UMAMI_WEBSITE_ID}
    />
  );
};

export default Umami;
