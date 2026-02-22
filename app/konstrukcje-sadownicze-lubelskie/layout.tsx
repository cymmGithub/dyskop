import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Konstrukcje sadownicze – wiercenie i montaż słupów | Lublin",
	description: "Profesjonalne wiercenie otworów pod słupy sadownicze, wkręcanie kotew naciągowych, montaż i demontaż słupków betonowych i drewnianych. Realizujemy zlecenia na terenie woj. lubelskiego i okolic.",
	keywords: ["konstrukcje sadownicze", "wiercenie otworów Lublin", "montaż słupów sadowniczych", "kotwy naciągowe", "słupy betonowe sad", "wiertnica DIGGA", "woj. lubelskie"],
	alternates: {
		canonical: 'https://dys-kop.pl/konstrukcje-sadownicze-lubelskie',
	},
	openGraph: {
		title: "Konstrukcje sadownicze – wiercenie i montaż słupów | Dys-kop",
		description: "Wiercenie otworów, montaż słupów sadowniczych, wkręcanie kotew naciągowych. Profesjonalne usługi w woj. lubelskim.",
		url: 'https://dys-kop.pl/konstrukcje-sadownicze-lubelskie',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: "Konstrukcje sadownicze – wiercenie i montaż słupów | Dys-kop",
		description: "Wiercenie otworów, montaż słupów sadowniczych, wkręcanie kotew naciągowych - profesjonalne usługi w woj. lubelskim.",
	},
};

export default function KonstrukcjeSadowniczeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
