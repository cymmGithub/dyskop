'use client';

import { useCookieConsent } from '@/lib/cookie-consent';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

interface ConditionalAnalyticsProps {
  gaId: string;
}

export default function ConditionalAnalytics({ gaId }: ConditionalAnalyticsProps) {
  const { consent } = useCookieConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render during SSR or before hydration
  // Only load Google Analytics if user has explicitly accepted cookies
  if (!mounted || consent !== 'accepted') {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
