'use client';

import { ToastContainer } from 'react-toastify';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { useEffect, useState } from 'react';
import LoadingSpinner from './ui/loading-spinner';
import ToastProvider from './toast-provider/ToastProvider';
import type { NextFont } from 'next/dist/compiled/@next/font';
import '../app/globals.css';

interface ClientLayoutProps {
  children: React.ReactNode;
  myFont: NextFont;
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
    <div className="h-screen overflow-hidden">
      <main
        className={`${myFont.className} md:container mx-auto h-screen flex flex-col`}
      >
        <ToastContainer />
        <Navbar />
        <div className='flex-1 min-h-0 overflow-y-auto xl:overflow-hidden'>
          <ToastProvider>{children}</ToastProvider>
        </div>
        <Footer />
      </main>
    </div>
  );
}