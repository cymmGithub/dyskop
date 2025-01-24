'use client';

import { ToastContainer } from 'react-toastify';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { useEffect, useState } from 'react';
import LoadingSpinner from './ui/loading-spinner';
import ToastProvider from './toast-provider/ToastProvider';
import '../app/globals.css';

interface ClientLayoutProps {
  children: React.ReactNode;
  myFont: any; // Using any for the font type as it's a complex Next.js type
}

export default function ClientLayout({ children, myFont }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
      return () => window.removeEventListener('load', () => setIsLoading(false));
    }
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <main
        className={`${myFont.className} md:container mx-auto text-center h-screen flex flex-col`}
      >
        <ToastContainer />
        <Navbar />
        <div className='flex-1 min-h-0'>
          <ToastProvider>{children}</ToastProvider>
        </div>
        <Footer />
      </main>
      <GoogleAnalytics gaId='G-3X4T8QRHVC' />
    </>
  );
}