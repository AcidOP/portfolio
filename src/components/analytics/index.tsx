import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';

const Analytics = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) return null;

  return (
    <>
      <SimpleAnalytics />
      <Umami />
    </>
  );
};

export default Analytics;
