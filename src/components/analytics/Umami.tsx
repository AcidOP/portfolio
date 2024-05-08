const Umami = () => {
  const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

  if (!UMAMI_WEBSITE_ID) return;

  return (
    <script
      defer
      src='/stats/script.js'
      data-website-id={UMAMI_WEBSITE_ID}
    />
  );
};

export default Umami;
