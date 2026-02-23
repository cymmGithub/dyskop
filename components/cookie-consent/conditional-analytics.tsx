'use client';

import { useCookieConsent } from '@/lib/cookie-consent';
import { GoogleTagManager } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

interface ConditionalAnalyticsProps {
  gtmId: string;
}

export default function ConditionalAnalytics({ gtmId }: ConditionalAnalyticsProps) {
  const { consent } = useCookieConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render during SSR or before hydration
  // Only load Google Tag Manager if user has explicitly accepted cookies
  if (!mounted || consent !== 'accepted') {
    return null;
  }

  return <GoogleTagManager gtmId={gtmId} />;
}
