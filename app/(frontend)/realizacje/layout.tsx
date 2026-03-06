import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Realizacje",
	description: "Zobacz nasze realizacje - galeria wykonanych prac. Prace ziemne, wykopy, odwierty i wstawianie słupków minikoparką w Lublinie i okolicach. Portfolio projektów firmy Dys-kop.",
	keywords: ["realizacje Dys-kop", "galeria prac minikoparka", "prace ziemne Lublin", "wykopy realizacje", "portfolio usługi minikoparką"],
	alternates: {
		canonical: 'https://dys-kop.pl/realizacje',
	},
	openGraph: {
		title: "Realizacje | Dys-kop - Galeria wykonanych prac",
		description: "Zobacz nasze realizacje - portfolio prac wykonanych minikoparką. Prace ziemne, wykopy, odwierty i wstawianie słupków w Lublinie.",
		url: 'https://dys-kop.pl/realizacje',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Realizacje | Dys-kop - Galeria wykonanych prac",
		description: "Zobacz nasze realizacje - portfolio prac wykonanych minikoparką w Lublinie i okolicach.",
	},
};

export default function RealizacjeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
