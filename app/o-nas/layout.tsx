import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "O nas",
	description: "Firma Dys-Kop - profesjonalne usługi minikoparką Caterpillar 301.8 o wadze 2 tony. Oferujemy odwierty wiertnicą DIGGA PDX2H-2 z systemem pionowania HALO. Obsługujemy Lublin i powiaty: świdnicki, lubartowski, opolski, puławski i kraśnicki.",
	openGraph: {
		title: "O nas | Dys-kop - Profesjonalne usługi minikoparką",
		description: "Poznaj firmę Dys-Kop. Dysponujemy minikoparką Caterpillar 301.8 i wiertnicą DIGGA PDX2H-2. Profesjonalna obsługa w Lublinie i okolicach.",
		url: 'https://dys-kop.pl/o-nas',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "O nas | Dys-kop - Profesjonalne usługi minikoparką",
		description: "Poznaj firmę Dys-Kop. Dysponujemy minikoparką Caterpillar 301.8 i wiertnicą DIGGA PDX2H-2.",
	},
};

export default function ONasLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
