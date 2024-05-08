import Script from 'next/script';

const SimpleAnalytics = () => {
  return (
    <>
      {/* Track pages */}
      <Script
        strategy='lazyOnload'
        src='https://api.acidop.codes/latest.js'
      />

      {/* Track events */}
      <Script
        strategy='lazyOnload'
        src='https://api.acidop.codes/auto-events.js'
      />
    </>
  );
};

export default SimpleAnalytics;
