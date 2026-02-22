import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "O nas",
	description: "Dys-Kop – profesjonalne usługi minikoparką Caterpillar 301.8, wiertnicą DIGGA PDX2H-2 i minitraktorem. Prace ziemne, konstrukcje sadownicze i przygotowanie terenu w Lublinie i województwie lubelskim.",
	keywords: ["Dys-kop", "usługi minikoparką Lublin", "prace ziemne Lublin", "wiertnica DIGGA", "Caterpillar 301.8", "minikoparka Lublin", "konstrukcje sadownicze"],
	alternates: {
		canonical: 'https://dys-kop.pl/o-nas',
	},
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
