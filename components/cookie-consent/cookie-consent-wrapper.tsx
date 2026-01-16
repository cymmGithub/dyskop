'use client';

import { CookieConsentProvider } from '@/lib/cookie-consent';
import CookieBanner from './cookie-banner';
import ConditionalAnalytics from './conditional-analytics';
import { type ReactNode } from 'react';

interface CookieConsentWrapperProps {
  children: ReactNode;
  gaId: string;
}

export default function CookieConsentWrapper({ children, gaId }: CookieConsentWrapperProps) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
      <ConditionalAnalytics gaId={gaId} />
    </CookieConsentProvider>
  );
}
