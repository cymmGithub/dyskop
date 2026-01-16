'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_DURATION_DAYS = 365;

export type ConsentState = 'pending' | 'accepted' | 'rejected';

interface CookieConsentContextType {
  consent: ConsentState;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedConsent = getCookie(CONSENT_COOKIE_NAME);
    if (savedConsent === 'accepted') {
      setConsent('accepted');
    } else if (savedConsent === 'rejected') {
      setConsent('rejected');
    }
  }, []);

  const acceptCookies = useCallback(() => {
    setCookie(CONSENT_COOKIE_NAME, 'accepted', CONSENT_DURATION_DAYS);
    setConsent('accepted');
  }, []);

  const rejectCookies = useCallback(() => {
    setCookie(CONSENT_COOKIE_NAME, 'rejected', CONSENT_DURATION_DAYS);
    setConsent('rejected');
  }, []);

  const resetConsent = useCallback(() => {
    deleteCookie(CONSENT_COOKIE_NAME);
    setConsent('pending');
  }, []);

  // Don't render children until we've checked for existing consent
  // This prevents flash of banner when consent already exists
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <CookieConsentContext.Provider value={{ consent, acceptCookies, rejectCookies, resetConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextType {
  const context = useContext(CookieConsentContext);
  // Return safe defaults during SSR/static generation
  if (!context) {
    return {
      consent: 'pending',
      acceptCookies: () => {},
      rejectCookies: () => {},
      resetConsent: () => {},
    };
  }
  return context;
}
