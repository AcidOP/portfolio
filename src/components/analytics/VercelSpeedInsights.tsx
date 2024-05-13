import { SpeedInsights } from "@vercel/speed-insights/next"

const VercelSpeedInsights = () => {
  const isEnabled = process.env.VERCEL_SPEED_INSIGHTS === 'true';

  if (!isEnabled) return null;

  return <SpeedInsights />
}

export default VercelSpeedInsights