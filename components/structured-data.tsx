export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Dys-kop",
		"image": "https://dys-kop.pl/img/open-graph.png",
		"@id": "https://dys-kop.pl",
		"url": "https://dys-kop.pl",
		"telephone": "+48506502709",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Dys",
			"addressLocality": "Dys",
			"postalCode": "21-003",
			"addressRegion": "Lubelskie",
			"addressCountry": "PL"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 51.3122,
			"longitude": 22.6494
		},
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				"opens": "07:00",
				"closes": "18:00"
			},
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": "Saturday",
				"opens": "08:00",
				"closes": "14:00"
			}
		],
		"sameAs": [
			"https://dys-kop.pl"
		],
		"description": "Profesjonalne usługi minikoparką Caterpillar 301.8 w Lublinie i okolicach. Oferujemy prace ziemne, wykopy liniowe, odwierty wiertnicą DIGGA PDX2H-2 oraz wstawianie słupków. Obsługujemy Lublin, Dys, Niemce, Łęcznę i okolice.",
		"areaServed": [
			{
				"@type": "City",
				"name": "Lublin"
			},
			{
				"@type": "City",
				"name": "Dys"
			},
			{
				"@type": "City",
				"name": "Niemce"
			},
			{
				"@type": "City",
				"name": "Łęczna"
			},
			{
				"@type": "City",
				"name": "Jastków"
			},
			{
				"@type": "City",
				"name": "Świdnik"
			},
			{
				"@type": "City",
				"name": "Lubartów"
			}
		],
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Usługi minikoparką",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Prace ziemne",
						"description": "Odkopywanie fundamentów, niwelacje i kształtowanie terenu, wykopy pod zbiorniki"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Wykopy liniowe",
						"description": "Wykopy pod przyłącza elektryczne, gazowe, wodne, kanalizacyjne i telekomunikacyjne"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Odwierty wiertnicą",
						"description": "Odwierty pod słupki ogrodzeniowe, konstrukcje sadownicze, znaki drogowe z wiertnicą DIGGA PDX2H-2"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Wstawianie słupków",
						"description": "Profesjonalne wstawianie słupków betonowych i drewnianych"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Konstrukcje sadownicze",
						"description": "Wiercenie otworów pod słupy sadownicze, wkręcanie kotew naciągowych, montaż i demontaż słupków betonowych i drewnianych"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Usługi minitraktorem",
						"description": "Koszenie trawników i nieużytków, orka pod uprawy, przygotowanie terenu pod trawnik, uprawa gleby. Kompaktowy ciągnik 26 KM."
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Glebogryzarka separacyjna",
						"description": "Profesjonalne przygotowanie terenu pod trawnik glebogryzarką separacyjną — spulchnianie, przesiewanie i wyrównanie gleby w jednym przejeździe"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Koszenie działek i nieużytków",
						"description": "Koszenie kosiarką bijakową i pielęgnacyjną — mulczowanie nieużytków, zarośli i samosiejek oraz regularna pielęgnacja trawników"
					}
				}
			]
		}
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}
