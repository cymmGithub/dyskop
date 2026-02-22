import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Kontakt",
	description: "Skontaktuj się z Dys-kop - profesjonalne usługi minikoparką w Lublinie. Zadzwoń 506 502 709 lub wypełnij formularz kontaktowy. Obsługujemy Lublin, Dys, Niemce i okolice.",
	keywords: ["kontakt Dys-kop", "usługi minikoparką kontakt", "minikoparka Lublin telefon", "formularz kontaktowy", "506 502 709"],
	alternates: {
		canonical: 'https://dys-kop.pl/kontakt',
	},
	openGraph: {
		title: "Kontakt | Dys-kop - Usługi minikoparką Lublin",
		description: "Skontaktuj się z nami przez telefon 506 502 709 lub wypełnij formularz kontaktowy. Profesjonalne usługi minikoparką w Lublinie i okolicach.",
		url: 'https://dys-kop.pl/kontakt',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Kontakt | Dys-kop - Usługi minikoparką Lublin",
		description: "Skontaktuj się z nami przez telefon 506 502 709 lub wypełnij formularz kontaktowy.",
	},
};

export default function KontaktLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
