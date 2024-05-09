import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import VercelAnalytics from './VercelAnalytics';

const Analytics = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) return null;

  return (
    <>
      <SimpleAnalytics />
      <Umami />
      <VercelAnalytics />
    </>
  );
};

export default Analytics;
