import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../public/fonts/Consolas.ttf' });
import './globals.css';

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
			<body>
				<main className={`${myFont.className} md:container mx-auto text-center min-h-screen`}>
					<Navbar />
					{children}
					<Footer />
				</main>
				<div className='hidden absolute'>
					#uslugi #minikoparka #dys #dyskop #lublin
				</div>
			</body>
			<GoogleAnalytics gaId="G-3X4T8QRHVC" />
		</html>
	);
}
