import type { Metadata } from 'next';
import Navbar from '../components/navbar/navbar';
import { Outfit } from 'next/font/google';
import './globals.css';

const font = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dys-kop Tomasz Sobka',
	description: 'Usługi Minikoparką',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${font.className} md:container mx-auto text-center`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
