import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';

const myFont = localFont({ src: '../../public/fonts/Consolas.ttf' });

export const metadata: Metadata = {
	title: 'Login | Dys-kop',
	description: 'Logowanie do panelu administracyjnego',
};

export default function LoginLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`${myFont.className} min-h-screen`}>
			{children}
		</div>
	);
}
