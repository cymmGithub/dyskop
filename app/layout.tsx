import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import LayoutWrapper from "../components/layout-wrapper";

const myFont = localFont({ src: "../public/fonts/Consolas.ttf" });

export const metadata: Metadata = {
	title: "Dys-kop | USŁUGI MINIKOPARKĄ | Dys, Lublin",
	description:
		"Usługi minikoparką: wykopy pod przyłącza; odkopywanie fundamentów; wyrywanie korzeni; utwardzanie podjazdów; odwodnienia budynków. Lublin; Dys; Niemce; Łęczna; Jastków; Garbów; Lubartów; Serniki Świdnik; Mełgiew; Bełżyce",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<body>
				<LayoutWrapper myFont={myFont}>{children}</LayoutWrapper>
				<div className='hidden absolute'>
					#uslugi #minikoparka #dys #dyskop #lublin
				</div>
			</body>
			<Script src='https://www.googletagmanager.com/gtag/js?id=AW-17061194297' />
			<Script id='google-analytics'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'AW-17061194297');
				`}
			</Script>
		</html>
	);
}
