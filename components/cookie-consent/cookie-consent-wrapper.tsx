'use client';

import { CookieConsentProvider } from '@/lib/cookie-consent';
import CookieBanner from './cookie-banner';
import ConditionalAnalytics from './conditional-analytics';
import { type ReactNode } from 'react';

interface CookieConsentWrapperProps {
  children: ReactNode;
  gtmId: string;
}

export default function CookieConsentWrapper({ children, gtmId }: CookieConsentWrapperProps) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
      <ConditionalAnalytics gtmId={gtmId} />
    </CookieConsentProvider>
  );
}
