import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Orka działek pługiem – przygotowanie gleby pod uprawy | Lublin",
	description: "Profesjonalna orka działek pługiem dwuskibowym w Lublinie i okolicach. Przygotowanie gleby pod uprawy, ogródki warzywne i tereny rekreacyjne. Usługi minitraktorem.",
	keywords: ["orka działek Lublin", "orka pługiem", "pług dwuskibowy", "przygotowanie gleby Lublin", "orka ogrodów", "minitraktor Lublin", "orka pod uprawy"],
	alternates: {
		canonical: 'https://dys-kop.pl/orka-dzialek-lubelskie',
	},
	openGraph: {
		title: "Orka działek pługiem – przygotowanie gleby pod uprawy | Dys-kop",
		description: "Orka działek pługiem dwuskibowym — przygotowanie gleby pod uprawy, ogródki warzywne i tereny rekreacyjne w Lublinie.",
		url: 'https://dys-kop.pl/orka-dzialek-lubelskie',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Orka działek pługiem – przygotowanie gleby pod uprawy | Dys-kop",
		description: "Orka działek pługiem dwuskibowym — przygotowanie gleby pod uprawy, ogródki warzywne i tereny rekreacyjne w Lublinie.",
	},
};

export default function OrkaDzialekLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
