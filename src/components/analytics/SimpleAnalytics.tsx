import Script from 'next/script';

const SimpleAnalytics = () => {
  const isEnabled = process.env.SIMPLE_ANALYTICS === 'true';

  if (!isEnabled) return null;

  return (
    <>
      {/* Track pages */}
      <Script strategy='lazyOnload' src='/sa/latest.js' />

      {/* Track events */}
      <Script strategy='lazyOnload' src='/sa/auto-events.js' />
    </>
  );
};

export default SimpleAnalytics;
