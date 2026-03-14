'use client';

import { ToastContainer } from 'react-toastify';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ToastProvider from './toast-provider/ToastProvider';
import type { NextFont } from 'next/dist/compiled/@next/font';
import '../app/globals.css';

interface ClientLayoutProps {
  children: React.ReactNode;
  myFont: NextFont;
}

export default function ClientLayout({ children, myFont }: ClientLayoutProps) {
  return (
    <div className="h-screen overflow-hidden">
      <div
        className={`${myFont.className} md:container mx-auto h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-gray-900 focus:font-bold focus:rounded-md focus:text-sm"
        >
          Przejdź do treści
        </a>
        <ToastContainer />
        <Navbar />
        <div id="main-content" className='flex-1 min-h-0 overflow-y-auto xl:overflow-hidden'>
          <ToastProvider>{children}</ToastProvider>
        </div>
        <Footer />
      </div>
    </div>
  );
}