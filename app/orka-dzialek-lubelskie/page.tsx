'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const scopeItems = [
	{ title: 'Ogródki warzywne', desc: 'Orka przydomowych ogródków i grządek pod warzywa' },
	{ title: 'Działki rekreacyjne', desc: 'Działki rekreacyjne, ROD i tereny sezonowe' },
	{ title: 'Ugory i odłogi', desc: 'Odświeżenie wieloletnich ugorów wymagających orki' },
	{ title: 'Przygotowanie pod uprawy', desc: 'Spulchnianie i napowietrzanie gleby przed siewem' },
];

export default function OrkaDzialek() {
	const [lightbox, setLightbox] = useState(false);

	return (
		<main className='relative overflow-hidden min-h-screen'>
			<div className='sketchy-bg absolute inset-0 opacity-30 pointer-events-none' />

			<div className='relative z-10 container mx-auto px-5 sm:px-10 pt-20 md:pt-24 pb-4 min-h-screen flex flex-col'>

				{/* Z-pattern grid — stacks on mobile, 5-col on desktop */}
				<div className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-[auto_1fr] gap-x-8 gap-y-4 md:gap-y-4 flex-1 mt-12 [&_p]:text-left'>

					{/* Row 1, Left: headline + intro */}
					<div
						className='md:col-span-3 flex flex-col justify-center order-1 md:order-none [&_p]:text-left opacity-0 animate-slideUp'
						style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
					>
					<div className='border-l-4 border-amber-500 pl-5'>
						<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
							Orka działek pługiem
							<span className='block text-amber-500 text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-normal'>
								pług dwuskibowy | Lublin i&nbsp;okolice
							</span>
						</h1>
						<p className='mt-2 text-sm leading-snug text-gray-600 max-w-lg'>
							Oferujemy usługę orki pługiem dwuskibowym, idealną do przygotowania gleby
							pod uprawy na mniejszych powierzchniach. To skuteczne rozwiązanie dla
							przydomowych ogródków warzywnych, działek rekreacyjnych oraz terenów
							wymagających odświeżenia przed nowym sezonem.
						</p>
						<p className='mt-2 text-sm leading-snug text-gray-600 max-w-lg'>
							Orka działki pozwala szybko i&nbsp;dokładnie przygotować podłoże pod siew
							oraz sadzenie roślin.
						</p>
					</div>
					</div>

					{/* Row 1, Right: equipment hero image */}
					<div
						className='md:col-span-2 flex items-end justify-center order-2 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
					>
						<Image
							src='/img/minitraktor-plug-dwuskibowy-orka-lublin.png'
							alt='Minitraktor z pługiem dwuskibowym — orka działek Lublin'
							width={460}
							height={307}
							priority
							className='w-full max-w-[300px] lg:max-w-[360px] object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
						/>
					</div>

					{/* Row 2, Left: scope of work 2x2 cards */}
					<div
						className='md:col-span-3 order-4 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
					>
						<h2 className='text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2'>Zakres usług orki</h2>
						<div className='grid grid-cols-2 gap-2'>
							{scopeItems.map((item) => (
								<div
									key={item.title}
									className='group relative bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 px-3 py-2 transition-all duration-300 hover:border-amber-300 hover:shadow-md hover:shadow-amber-400/10'
								>
									<div className='absolute top-0 left-0 w-8 h-0.5 bg-amber-400 rounded-full transition-all duration-300 group-hover:w-full' />
									<h3 className='text-xs md:text-sm font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300'>
										{item.title}
									</h3>
									<p className='text-xs text-gray-500 mt-0.5 leading-snug'>{item.desc}</p>
								</div>
							))}
						</div>
						<p className='mt-2 text-xs text-gray-400 leading-snug'>
							Usługę orki działek realizujemy na terenie <span className='text-gray-600 font-medium'>Lublina</span>,
							powiatu lubelskiego oraz w&nbsp;miejscowościach oddalonych do
							ok.&nbsp;<span className='text-gray-600 font-medium'>30–40&nbsp;km</span> od Lublina
							(m.in. Konopnica, Garbów, Jastków, Turka i&nbsp;okolice).
						</p>
					</div>

					{/* Row 2, Right: single gallery image */}
					<div
						className='md:col-span-2 flex items-start justify-center order-3 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
					>
						<div className='w-full max-w-[340px] lg:max-w-[400px]'>
							<button
								onClick={() => setLightbox(true)}
								className='relative w-full cursor-zoom-in'
								aria-label='Powiększ zdjęcie'
							>
								<Image
									src='/img/orka-plugiem-efekt-przygotowanie-gleby-lublin.jpg'
									alt='Orka pługiem — przygotowanie gleby pod uprawy Lublin'
									width={460}
									height={307}
									className='w-full rounded-lg object-cover aspect-[3/2] drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
								/>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Lightbox overlay */}
			{lightbox && (
				<div
					className='fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center'
					onClick={() => setLightbox(false)}
				>
					<button
						onClick={() => setLightbox(false)}
						className='absolute top-4 right-4 text-white/70 hover:text-white transition-colors'
						aria-label='Zamknij'
					>
						<X className='w-8 h-8' />
					</button>

					<div className='relative' onClick={(e) => e.stopPropagation()}>
						<Image
							src='/img/orka-plugiem-efekt-przygotowanie-gleby-lublin.jpg'
							alt='Orka pługiem — przygotowanie gleby pod uprawy Lublin'
							width={1200}
							height={800}
							className='max-h-[85vh] max-w-[90vw] object-contain'
						/>
					</div>
				</div>
			)}
		</main>
	);
}
