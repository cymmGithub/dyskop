'use client';

import { usePathname } from 'next/navigation';
import ClientLayout from './client-layout';
import type { NextFont } from 'next/dist/compiled/@next/font';

interface LayoutWrapperProps {
	children: React.ReactNode;
	myFont: NextFont;
}

export default function LayoutWrapper({ children, myFont }: LayoutWrapperProps) {
	const pathname = usePathname();

	// Routes that should not use the main ClientLayout (no navbar/footer)
	const isStandaloneRoute = pathname?.startsWith('/admin') || pathname?.startsWith('/login');

	if (isStandaloneRoute) {
		return <>{children}</>;
	}

	return <ClientLayout myFont={myFont}>{children}</ClientLayout>;
}
