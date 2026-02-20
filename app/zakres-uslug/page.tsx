import Image from 'next/image';

export default function Services() {
	return (
		<div className='relative h-screen overflow-y-auto overflow-x-hidden pb-32 sm:pb-10 pt-24 md:pt-28'>
			<div className='relative z-10 py-4 sm:py-8 w-full mt-0 md:mt-16 lg:mt-24'>
				<div className='container mx-auto'>
					<div className='grid max-w-2xl grid-cols-1 gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
						<article
							key={'9cd218fc-8733-4001-9cdc-24f914d7e71f'}
							className='flex max-w-xl flex-col items-center mb-12 md:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/dig-service.png`}
										height={80}
										width={240}
										alt='Prace ziemne minikoparką - wykopy i niwelacje'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										PRACE ZIEMNE
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600 space-y-1'>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>odkopywanie fundamentów pod izolacje</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>niwelacje i kształtowanie terenu</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>ściąganie humusu, korytowanie</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>wykopy pod zbiorniki podziemne</span>
										</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'8c1bddeb-84f7-43b5-9884-218aa47189f3'}
							className='flex max-w-xl flex-col items-center mb-12 md:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/connections-service.png`}
										height={80}
										width={220}
										alt='Wykopy liniowe pod przyłącza i instalacje'
										className='rounded-lg opacity-70 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										WYKOPY LINIOWE POD
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600 space-y-1'>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>przyłącza: elektryczne, gazowe, wodne, kanalizacyjne, telekomunikacyjne</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>światłowody</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>fundamenty</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>sieci rur drenarskich</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>nawodnienie/ odwodnienie</span>
										</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'drilling-services-001'}
							className='flex max-w-xl flex-col items-center mb-12 md:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/homepage/wiertnica.png`}
										height={80}
										width={200}
										alt='Wiertnica DIGGA PDX2H-2 do precyzyjnych odwiertów'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										ODWIERTY POD
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600 space-y-1'>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>słupki ogrodzeniowe</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>konstrukcje/rusztowania sadownicze</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>znaki drogowe</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>konstrukcje fotowoltaiczne</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>nasadzenia i inne</span>
										</li>
									</ul>
								</div>
							</div>
						</article>
						<article
							key={'758d0c19-4d01-470d-acff-5959960dedab'}
							className='flex max-w-xl flex-col items-center mb-12 md:mb-0 opacity-0 animate-slideUp'
							style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
						>
							<div className='flex flex-col items-center w-full'>
								<div className='h-32 flex items-center justify-center mb-8'>
									<Image
										src={`/img/homepage/slupki.png`}
										height={80}
										width={220}
										alt='Wstawianie słupków i inne usługi minikoparką'
										className='rounded-lg opacity-80 object-contain'
									/>
								</div>
								<div className='group relative w-full'>
									<h3 className='mt-4 text-sm sm:text-base font-semibold leading-6 text-gray-900 text-center'>
										INNE
									</h3>
									<ul className='mt-1 sm:mt-3 text-xs sm:text-sm text-gray-600 space-y-1'>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>wstawianie słupków betonowych/drewnianych</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>montaż/demontaż podkładów kolejowych</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>wyrywanie korzeni</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>odprowadzenia wody deszczowej od budynków</span>
										</li>
										<li className='flex items-start space-x-2'>
											<span className='h-1.5 w-1.5 rounded-full bg-yellow-600 flex-shrink-0 mt-[0.4rem]'></span>
											<span>utwardzanie podjazdów</span>
										</li>
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
