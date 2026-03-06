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

	// Safety net: /admin is handled by Payload's own layout via (payload) route group
	if (pathname?.startsWith('/admin')) {
		return <>{children}</>;
	}

	return <ClientLayout myFont={myFont}>{children}</ClientLayout>;
}
