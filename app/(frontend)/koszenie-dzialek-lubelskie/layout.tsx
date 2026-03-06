import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Koszenie działek i nieużytków – kosiarka bijakowa i pielęgnacyjna | Lublin",
	description: "Profesjonalne koszenie działek, nieużytków i trawników w Lublinie i okolicach. Kosiarka bijakowa na zarośla i samosiejki, pielęgnacyjna na trawniki. Usługi minitraktorem.",
	keywords: ["koszenie działek Lublin", "kosiarka bijakowa", "kosiarka pielęgnacyjna", "koszenie nieużytków Lublin", "mulczowanie", "koszenie trawników Lublin", "minitraktor Lublin"],
	alternates: {
		canonical: 'https://dys-kop.pl/koszenie-dzialek-lubelskie',
	},
	openGraph: {
		title: "Koszenie działek i nieużytków – kosiarka bijakowa i pielęgnacyjna | Dys-kop",
		description: "Koszenie działek, nieużytków i trawników kosiarką bijakową i pielęgnacyjną — Lublin i okolice.",
		url: 'https://dys-kop.pl/koszenie-dzialek-lubelskie',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Koszenie działek i nieużytków – kosiarka bijakowa i pielęgnacyjna | Dys-kop",
		description: "Koszenie działek, nieużytków i trawników kosiarką bijakową i pielęgnacyjną — Lublin i okolice.",
	},
};

export default function KoszenieDzialekLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
