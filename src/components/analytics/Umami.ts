'use client';

import { useEffect } from 'react';

const UmamiScript = () => {

  const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;

  useEffect(() => {

    if (!UMAMI_WEBSITE_ID) return;

    const script = document.createElement('script');

    script.src = 'https://eu.umami.is/script.js';
    script.defer = true;
    script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [UMAMI_WEBSITE_ID]);

  return null;
};

export default UmamiScript;
