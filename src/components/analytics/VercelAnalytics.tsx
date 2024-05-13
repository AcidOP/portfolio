import { Analytics } from '@vercel/analytics/next';

const VercelAnalytics = () => {
  const isEnabled = process.env.VERCEL_ANALYTICS === 'true';

  if (!isEnabled) return null;

  return <Analytics />;
};

export default VercelAnalytics;
