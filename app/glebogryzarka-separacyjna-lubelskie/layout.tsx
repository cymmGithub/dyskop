import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Glebogryzarka separacyjna – przygotowanie terenu pod trawnik | Lublin",
	description: "Profesjonalne przygotowanie terenu pod trawnik glebogryzarką separacyjną w Lublinie i okolicach. Spulchnianie, przesiewanie i wyrównanie gleby w jednym przejeździe. Usługi minitraktorem.",
	keywords: ["glebogryzarka separacyjna", "przygotowanie terenu pod trawnik Lublin", "separacyjna Lublin", "uprawa gleby", "zakładanie trawnika Lublin", "minitraktor Lublin", "wyrównanie terenu"],
	alternates: {
		canonical: 'https://dys-kop.pl/glebogryzarka-separacyjna-lubelskie',
	},
	openGraph: {
		title: "Glebogryzarka separacyjna – przygotowanie terenu pod trawnik | Dys-kop",
		description: "Przygotowanie terenu pod trawnik glebogryzarką separacyjną — spulchnianie, przesiewanie i wyrównanie gleby. Lublin i okolice.",
		url: 'https://dys-kop.pl/glebogryzarka-separacyjna-lubelskie',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Glebogryzarka separacyjna – przygotowanie terenu pod trawnik | Dys-kop",
		description: "Przygotowanie terenu pod trawnik glebogryzarką separacyjną — spulchnianie, przesiewanie i wyrównanie gleby. Lublin i okolice.",
	},
};

export default function GlebogryzarkaSeparacyjnaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
