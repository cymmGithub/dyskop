import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../public/fonts/Consolas.ttf' });
import './globals.css';
import ToastProvider from '@/components/toast-provider/ToastProvider';

const font = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dys-kop | USŁUGI MINIKOPARKĄ | Dys, Lublin',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body className='h-screen overflow-hidden'>
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
				<div className='hidden absolute'>
					#uslugi #minikoparka #dys #dyskop #lublin
				</div>
			</body>
			<GoogleAnalytics gaId='G-3X4T8QRHVC' />
		</html>
	);
}
