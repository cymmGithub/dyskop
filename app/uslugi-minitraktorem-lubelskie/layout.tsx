import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Usługi minitraktorem Lublin i okolice | Dys-kop",
	description: "Profesjonalne usługi minitraktorem w Lublinie i okolicach. Koszenie trawników i nieużytków, orka pod uprawy, przygotowanie terenu pod trawnik, uprawa gleby. Kompaktowy ciągnik 26 KM — precyzja tam, gdzie duże maszyny nie wjadą.",
	keywords: ["usługi minitraktorem", "minitraktor Lublin", "koszenie trawników Lublin", "orka Lublin", "przygotowanie terenu pod trawnik", "glebogryzarka", "kosiarka bijakowa"],
	alternates: {
		canonical: 'https://dys-kop.pl/uslugi-minitraktorem-lubelskie',
	},
	openGraph: {
		title: "Usługi minitraktorem Lublin i okolice | Dys-kop",
		description: "Koszenie, orka, przygotowanie terenu pod trawnik, uprawa gleby. Profesjonalne usługi minitraktorem w Lublinie i powiecie lubelskim.",
		url: 'https://dys-kop.pl/uslugi-minitraktorem-lubelskie',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Usługi minitraktorem Lublin i okolice | Dys-kop",
		description: "Koszenie, orka, przygotowanie terenu — profesjonalne usługi minitraktorem w Lublinie i okolicach.",
	},
};

export default function UslugiMinitractoremLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
