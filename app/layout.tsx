import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import LayoutWrapper from "../components/layout-wrapper";
import StructuredData from "../components/structured-data";
import CookieConsentWrapper from "../components/cookie-consent/cookie-consent-wrapper";

const myFont = localFont({ src: "../public/fonts/Consolas.ttf" });

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: '#ffffff',
};

export const metadata: Metadata = {
	metadataBase: new URL('https://dys-kop.pl'),
	title: {
		default: "Dys-kop | Usługi minikoparką - Lublin i okolice",
		template: "%s | Dys-kop"
	},
	description:
		"Profesjonalne usługi minikoparką Caterpillar 301.8 w Lublinie i okolicach. Oferujemy prace ziemne, wykopy liniowe, odwierty wiertnicą DIGGA oraz wstawianie słupków. Obsługujemy Lublin, Dys, Niemce, Łęcznę i okolice.",
	keywords: [
		"usługi minikoparką",
		"minikoparka Lublin",
		"prace ziemne",
		"wykopy Lublin",
		"wiertnica",
		"odwierty",
		"słupki ogrodzeniowe",
		"Caterpillar 301.8",
		"Dys",
		"Niemce",
		"Łęczna"
	],
	authors: [{ name: "Dys-kop" }],
	creator: "Dys-kop",
	publisher: "Dys-kop",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Dys-kop | Usługi minikoparką - Lublin i okolice",
		description:
			"Profesjonalne usługi minikoparką Caterpillar 301.8 w Lublinie. Prace ziemne, wykopy, odwierty wiertnicą DIGGA, wstawianie słupków.",
		url: 'https://dys-kop.pl',
		siteName: 'Dys-kop',
		locale: 'pl_PL',
		type: 'website',
		images: [
			{
				url: '/img/open-graph.png',
				width: 1200,
				height: 630,
				alt: 'Dys-kop - Usługi minikoparką: prace ziemne, odwierty wiertnicą, wstawianie słupków - Lublin',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "Dys-kop | Usługi minikoparką - Lublin i okolice",
		description:
			"Profesjonalne usługi minikoparką Caterpillar 301.8 w Lublinie. Prace ziemne, wykopy, odwierty wiertnicą DIGGA.",
		images: ['/img/open-graph.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		// Add your verification tokens here when available
		google: 'j19cBVL-4kdGvWr1dWgE-tYK13_4KfMbS7OxPFOI_T8',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<head>
				<StructuredData />
			</head>
			<body>
				<CookieConsentWrapper gtmId="GTM-W2GKPG8J">
					<LayoutWrapper myFont={myFont}>{children}</LayoutWrapper>
				</CookieConsentWrapper>
			</body>
		</html>
	);
}
