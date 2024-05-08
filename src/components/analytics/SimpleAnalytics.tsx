import Script from "next/script";

const SimpleAnalytics = () => {
  return (
    <>
      {/* Track pages */}
      <Script
        strategy="lazyOnload"
        src='https://scripts.simpleanalyticscdn.com/latest.js'
      />

      {/* Track events */}
      <Script
        strategy="lazyOnload"
        src="https://scripts.simpleanalyticscdn.com/auto-events.js"
      />
    </>
  );
};

export default SimpleAnalytics;
