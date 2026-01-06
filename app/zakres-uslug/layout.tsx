import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Zakres usług",
	description: "Kompleksowe usługi minikoparką w Lublinie: prace ziemne, wykopy liniowe pod przyłącza, odwierty wiertnicą (øfi 150mm, 250mm), wstawianie słupków betonowych i drewnianych. Caterpillar 301.8 i wiertnica DIGGA PDX2H-2.",
	openGraph: {
		title: "Zakres usług | Dys-kop - Usługi minikoparką Lublin",
		description: "Prace ziemne, wykopy pod przyłącza, odwierty wiertnicą, wstawianie słupków. Profesjonalne usługi minikoparką Caterpillar 301.8 w Lublinie.",
		url: 'https://dys-kop.pl/zakres-uslug',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Zakres usług | Dys-kop - Usługi minikoparką Lublin",
		description: "Prace ziemne, wykopy, odwierty, wstawianie słupków - profesjonalne usługi minikoparką w Lublinie.",
	},
};

export default function ZakresUslugLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
