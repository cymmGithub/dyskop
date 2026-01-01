'use client';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myFont = localFont({ src: '../../public/fonts/Consolas.ttf' });

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`${myFont.className} bg-gray-50 min-h-screen`}>
			{children}
			<ToastContainer />
		</div>
	);
}
