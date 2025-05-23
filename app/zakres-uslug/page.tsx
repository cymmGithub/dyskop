import Image from 'next/image';

export default function Services() {
	return (
		<div className='relative h-screen overflow-y-auto overflow-x-hidden pt-24 md:pt-28 pb-20'>
			<div className='relative z-10 py-4 sm:py-8'>
				<div className='container mx-auto'>
					<div className='grid max-w-2xl grid-cols-1 gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
						<article
							key={'9cd218fc-8733-4001-9cdc-24f914d7e71f'}
							className='flex max-w-xl flex-col items-center mb-12 sm:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/dig-service.png`}
										height={80}
										width={200}
										alt='Usługi'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										PRACE ZIEMNE
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600'>
										<li>- odkopywanie fundamentów pod izolacje</li>
										<li>- niwelacje i kształtowanie terenu</li>
										<li>- ściąganie humusu, korytowani</li>
										<li>- wykopy pod zbiorniki podziemne</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'8c1bddeb-84f7-43b5-9884-218aa47189f3'}
							className='flex max-w-xl flex-col items-center mb-12 sm:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/connections-service.png`}
										height={80}
										width={200}
										alt='Usługi'
										className='rounded-lg opacity-70 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										WYKOPY LINIOWE POD
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600'>
										<li>
											- przyłącza: elektryczne, gazowe, wodne, kanalizacyjne,
											telekomunikacyjne
										</li>
										<li>- światłowody</li>
										<li>- fundamenty</li>
										<li>- sieci rur drenarskich</li>
										<li>- nawodnienie/ odwodnienie</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'drilling-services-001'}
							className='flex max-w-xl flex-col items-center mb-12 sm:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/homepage/wiertnica.png`}
										height={80}
										width={200}
										alt='Odwierty'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										ODWIERTY POD
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600'>
										<li>- słupki ogrodzeniowe</li>
										<li>- konstrukcje/rusztowania sadownicze</li>
										<li>- znaki drogowe</li>
										<li>- konstrukcje fotowoltaiczne</li>
										<li>- nasadzenia i inne</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'758d0c19-4d01-470d-acff-5959960dedab'}
							className='flex max-w-xl flex-col items-center mb-12 sm:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/homepage/slupki.png`}
										height={80}
										width={220}
										alt='Usługi'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										INNE
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600'>
										<li>- wstawianie słupków betonowych/drewnianych</li>
										<li>- montaż/demontaż podkładów kolejowych</li>
										<li>- wyrywanie korzeni</li>
										<li>- odprowadzenia wody deszczowej od budynków</li>
										<li>- utwardzanie podjazdów</li>
									</ul>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}
