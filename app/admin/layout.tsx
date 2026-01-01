import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';

const myFont = localFont({ src: '../../public/fonts/Consolas.ttf' });

export const metadata: Metadata = {
	title: 'Admin Panel | Dys-kop',
	description: 'Panel administracyjny zarządzania galerią',
};

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={`${myFont.className} bg-gray-50 min-h-screen`}>
			{children}
		</div>
	);
}
