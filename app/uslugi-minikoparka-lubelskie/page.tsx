import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';


const services = [
	{
		title: 'PRACE ZIEMNE',
		image: '/img/prace-ziemne-minikoparka.png',
		alt: 'Prace ziemne minikoparką — wykopy i niwelacje Lublin',
		items: [
			'odkopywanie fundamentów pod izolacje',
			'niwelacje i kształtowanie terenu',
			'ściąganie humusu, korytowanie',
			'wykopy pod zbiorniki podziemne',
		],
	},
	{
		title: 'WYKOPY LINIOWE POD',
		image: '/img/wykopy-liniowe-przylacza-minikoparka.png',
		alt: 'Wykopy liniowe pod przyłącza i instalacje — minikoparka Lublin',
		items: [
			'przyłącza: elektryczne, gazowe, wodne, kanalizacyjne, telekomunikacyjne',
			'światłowody',
			'fundamenty',
			'sieci rur drenarskich',
			'nawodnienie/ odwodnienie',
		],
	},
	{
		title: 'ODWIERTY POD',
		image: '/img/homepage/wiertnica.png',
		alt: 'Wiertnica DIGGA PDX2H-2 — odwierty pod słupki Lublin',
		items: [
			'słupki ogrodzeniowe',
			'konstrukcje/rusztowania sadownicze',
			'znaki drogowe',
			'konstrukcje fotowoltaiczne',
			'nasadzenia i inne',
		],
	},
	{
		title: 'INNE',
		image: '/img/homepage/slupki.png',
		alt: 'Wstawianie słupków i inne usługi minikoparką Lublin',
		items: [
			'wstawianie słupków betonowych/drewnianych',
			'montaż/demontaż podkładów kolejowych',
			'wyrywanie korzeni',
			'odprowadzenia wody deszczowej od budynków',
			'utwardzanie podjazdów',
		],
	},
];

const cardDelays = ['0.2s', '0.4s', '0.6s', '0.8s'];

export default function Services() {
	return (
		<main className='relative overflow-x-hidden pt-20 md:pt-28 pb-8 sm:pb-16'>
			<div className='sketchy-bg absolute inset-0 opacity-30 pointer-events-none' />
			<div className='relative z-10 container mx-auto px-5 sm:px-10'>
				{/* Section 1: Hero + Coverage side by side */}
				<section
					className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-5 md:mb-6 opacity-0 animate-slideUp mt-6'
					style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
				>
					{/* Left — Hero */}
					<div className='border-l-4 border-amber-500 pl-6 md:flex-1'>
						<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
							Usługi minikoparką
							<span className='block text-amber-500 text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-normal'>
								powiat lubelski i&nbsp;okolice
							</span>
						</h1>
						<p className='mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-600 max-w-2xl text-left'>
							Oferujemy profesjonalne usługi minikoparką, realizowane kompaktową maszyną{' '}
							<b className='text-gray-800'>Caterpillar&nbsp;301.8</b>, idealną tam, gdzie duży sprzęt
							nie ma dostępu lub mógłby uszkodzić otoczenie. Prace ziemne wykonujemy z&nbsp;precyzją
							i&nbsp;dbałością o&nbsp;szczegóły — zarówno na prywatnych działkach, jak
							i&nbsp;na&nbsp;inwestycjach budowlanych.
						</p>
					</div>

					{/* Right — Coverage area */}
					<div className='md:flex-1 md:max-w-sm'>
						<h2 className='flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-900 mb-3'>
							<FaMapMarkerAlt className='text-amber-500 text-sm' />
							Gdzie realizujemy usługi?
						</h2>
						<div className='flex flex-wrap gap-2'>

							<span className='px-2.5 py-1 rounded-full text-xs text-gray-500'>
								Usługi minikoparką wykonujemy w Lublinie oraz w miejscowościach powiatu lubelskiego i w promieniu około 30–40 km od Lublina — m.in. w Świdniku, Lubartowie, Konopnicy, Garbowie, Jastkowie i Turce.
							</span>
						</div>
					</div>
				</section>

				{/* Section 2: Service Cards Grid */}
				<section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6'>
					{services.map((service, i) => (
						<article
							key={i}
							className='group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/15 hover:border-amber-300 opacity-0 animate-slideUp'
							style={{ animationDelay: cardDelays[i], animationFillMode: 'forwards' }}
						>
							{/* Amber accent top line */}
							<div className='absolute top-0 left-0 right-0 h-0.5 bg-amber-400 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-10' />

							{/* Image strip */}
							<div className='h-28 sm:h-32 md:h-28 flex items-center justify-center overflow-hidden'>
								<Image
									src={service.image}
									height={120}
									width={200}
									alt={service.alt}
									className='p-1 object-contain max-h-full opacity-80 transition-transform duration-500 ease-out group-hover:scale-105'
								/>
							</div>

							{/* Title row */}
							<div className='flex items-center justify-between gap-2 px-4 py-2.5 border-b border-gray-100'>
								<h3 className='font-bold text-sm text-gray-800 transition-colors duration-500 ease-out group-hover:text-amber-600'>
									{service.title}:
								</h3>
							</div>

							{/* Service list */}
							<ul className='px-4 py-2 text-xs sm:text-sm md:text-xs text-gray-600 space-y-0.5'>
								{service.items.map((item) => (
									<li key={item} className='flex items-start space-x-2'>
										<span className='h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-[0.4rem]' />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
