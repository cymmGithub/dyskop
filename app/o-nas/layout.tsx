import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "O nas",
	description: "Dys-Kop – profesjonalne usługi minikoparką Caterpillar 301.8, wiertnicą DIGGA PDX2H-2 i minitraktorem. Prace ziemne, konstrukcje sadownicze i przygotowanie terenu w Lublinie i województwie lubelskim.",
	openGraph: {
		title: "O nas | Dys-kop - Usługi minikoparką, wiertnicą i minitraktorem",
		description: "Poznaj firmę Dys-Kop. Minikoparką Caterpillar 301.8, wiertnicą DIGGA PDX2H-2 i minitraktorem realizujemy prace ziemne w Lublinie i województwie lubelskim.",
		url: 'https://dys-kop.pl/o-nas',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "O nas | Dys-kop - Usługi minikoparką, wiertnicą i minitraktorem",
		description: "Poznaj firmę Dys-Kop. Minikoparką CAT 301.8, wiertnicą DIGGA PDX2H-2 i minitraktorem realizujemy prace ziemne w Lublinie i województwie lubelskim.",
	},
};

export default function ONasLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
