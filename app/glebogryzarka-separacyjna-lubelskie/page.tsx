'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const scopeItems = [
	{ title: 'Siew trawy', desc: 'Przygotowanie podłoża pod wysiew — spulchniona, oczyszczona i wyrównana gleba' },
	{ title: 'Zakładanie ogrodów', desc: 'Kompleksowe przygotowanie terenu pod nasadzenia i trawniki' },
	{ title: 'Tereny przydomowe', desc: 'Działki prywatne i inwestycyjne — nowe i wymagające renowacji' },
	{ title: 'Boiska i place', desc: 'Tereny rekreacyjne, place zabaw i inne tereny zielone' },
];

const galleryImages = [
	{ src: '/img/efekt-glebogryzarki-separacyjnej-trawnik-lublin.jpg', alt: 'Efekt pracy glebogryzarki separacyjnej — wyrównany teren pod trawnik Lublin' },
	{ src: '/img/przygotowanie-terenu-glebogryzarka-separacyjna-lublin.jpg', alt: 'Przygotowanie terenu glebogryzarką separacyjną — teren gotowy pod trawnik Lublin' },
];

export default function GlebogryzarkaSeparacyjna() {
	const [current, setCurrent] = useState(0);
	const [lightbox, setLightbox] = useState<number | null>(null);

	const prev = useCallback(() => setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length), []);
	const next = useCallback(() => setCurrent((c) => (c + 1) % galleryImages.length), []);

	const lightboxPrev = useCallback(() => setLightbox((c) => c !== null ? (c - 1 + galleryImages.length) % galleryImages.length : null), []);
	const lightboxNext = useCallback(() => setLightbox((c) => c !== null ? (c + 1) % galleryImages.length : null), []);

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
							Glebogryzarka separacyjna
							<span className='block text-amber-500 text-base sm:text-lg md:text-xl mt-1 font-semibold tracking-normal'>
								przygotowanie terenu pod trawnik — Lublin i&nbsp;okolice
							</span>
						</h1>
						<p className='mt-2 text-sm leading-snug text-gray-600 max-w-lg'>
							Glebogryzarka separacyjna to specjalistyczna maszyna do profesjonalnego
							przygotowania gleby przed założeniem trawnika, ogrodu lub terenów zielonych.
							Jej zadaniem jest nie tylko spulchnienie ziemi, ale również oddzielenie kamieni,
							korzeni i&nbsp;zanieczyszczeń od żyznej warstwy gleby — wszystko w&nbsp;jednym przejeździe.
						</p>
					</div>
					</div>

					{/* Row 1, Right: equipment hero image */}
					<div
						className='md:col-span-2 flex items-end justify-center order-2 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
					>
						<Image
							src='/img/minitraktor-glebogryzarka-separacyjna-lublin.png'
							alt='Minitraktor z glebogryzarką separacyjną — przygotowanie terenu Lublin'
							width={460}
							height={307}
							priority
							className='w-full max-w-[300px] lg:max-w-[360px] object-contain drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
						/>
					</div>

					{/* Row 2, Left: scope of work 2×2 cards */}
					<div
						className='md:col-span-3 order-4 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
					>
						<h2 className='text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2'>Co można przygotować?</h2>
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
							Usługę realizujemy na terenie <span className='text-gray-600 font-medium'>Lublina</span>,
							powiatu lubelskiego oraz w&nbsp;miejscowościach oddalonych do
							ok.&nbsp;<span className='text-gray-600 font-medium'>30–40&nbsp;km</span> od Lublina
							(m.in. Świdnik, Lubartów, Konopnica, Garbów, Jastków, Jakubowice, Turka i&nbsp;okolice).
						</p>
					</div>

					{/* Row 2, Right: mini gallery with chevrons */}
					<div
						className='md:col-span-2 flex items-start justify-center order-3 md:order-none opacity-0 animate-slideUp'
						style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
					>
						<div className='flex items-center gap-2 w-full max-w-[340px] lg:max-w-[400px]'>
							<button
								onClick={prev}
								className='shrink-0 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md hover:bg-amber-50 transition-colors'
								aria-label='Poprzednie zdjęcie'
							>
								<ChevronLeft className='w-4 h-4 text-gray-700' />
							</button>

							<div className='flex-1 min-w-0'>
								<button
									onClick={() => setLightbox(current)}
									className='w-full cursor-zoom-in'
									aria-label='Powiększ zdjęcie'
								>
									<Image
										src={galleryImages[current].src}
										alt={galleryImages[current].alt}
										width={460}
										height={307}
										className='w-full rounded-lg object-cover aspect-[3/2] drop-shadow-[0_8px_24px_rgba(245,158,11,0.15)]'
									/>
								</button>

								{/* Dots */}
								<div className='flex justify-center gap-1.5 mt-2'>
									{galleryImages.map((_, i) => (
										<button
											key={i}
											onClick={() => setCurrent(i)}
											className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-amber-500' : 'bg-gray-300'}`}
											aria-label={`Zdjęcie ${i + 1}`}
										/>
									))}
								</div>
							</div>

							<button
								onClick={next}
								className='shrink-0 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-md hover:bg-amber-50 transition-colors'
								aria-label='Następne zdjęcie'
							>
								<ChevronRight className='w-4 h-4 text-gray-700' />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Lightbox overlay */}
			{lightbox !== null && (
				<div
					className='fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center'
					onClick={() => setLightbox(null)}
				>
					<button
						onClick={() => setLightbox(null)}
						className='absolute top-4 right-4 text-white/70 hover:text-white transition-colors'
						aria-label='Zamknij'
					>
						<X className='w-8 h-8' />
					</button>

					<button
						onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
						className='absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors'
						aria-label='Poprzednie zdjęcie'
					>
						<ChevronLeft className='w-10 h-10' />
					</button>

					<Image
						src={galleryImages[lightbox].src}
						alt={galleryImages[lightbox].alt}
						width={1200}
						height={800}
						className='max-h-[85vh] max-w-[90vw] object-contain'
						onClick={(e) => e.stopPropagation()}
					/>

					<button
						onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
						className='absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors'
						aria-label='Następne zdjęcie'
					>
						<ChevronRight className='w-10 h-10' />
					</button>

					{/* Lightbox dots */}
					<div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
						{galleryImages.map((_, i) => (
							<button
								key={i}
								onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
								className={`w-2 h-2 rounded-full transition-colors ${i === lightbox ? 'bg-amber-500' : 'bg-white/40'}`}
								aria-label={`Zdjęcie ${i + 1}`}
							/>
						))}
					</div>
				</div>
			)}
		</main>
	);
}
