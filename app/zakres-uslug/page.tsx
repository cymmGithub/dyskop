import Image from 'next/image';

export default function Services() {
	return (
		<div className='relative h-full overflow-y-auto overflow-x-hidden pt-24 md:pt-28'>
			<div className='relative z-10 min-h-full flex items-center py-4 sm:py-8'>
				<div className='container mx-auto'>
					<div className='mx-5 grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
						<article
							key={'9cd218fc-8733-4001-9cdc-24f914d7e71f'}
							className='flex max-w-xl flex-col justify-center items-center mb-3 sm:mb-0'
						>
							<Image
								src={`/img/dig-service.png`}
								height={100}
								width={260}
								alt='Usługi'
								className='rounded-lg opacity-80'
							/>
							<div className='group relative'>
								<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900'>
									WYKOPY
								</h3>
								<ul className='mt-2 sm:mt-5 text-gray-600'>
									<li>- odkopywanie fundamentów pod izolacje</li>
									<li>- niwelacje i kształtowanie terenu</li>
									<li>- skarpowanie</li>
									<li>- zbieranie humusu (warstwy wierzchniej ziemi)</li>
									<li>- korytowanie</li>
									<li>- oczyszczanie rowów</li>
								</ul>
							</div>
						</article>
						<article
							key={'8c1bddeb-84f7-43b5-9884-218aa47189f3'}
							className='flex max-w-xl flex-col justify-center items-center mb-3 sm:mb-0'
						>
							<Image
								src={`/img/connections-service.png`}
								height={100}
								width={260}
								alt='Usługi'
								className='rounded-lg opacity-70 mb-1'
							/>
							<div className='group relative'>
								<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900'>
									WYKOPY LINIOWE POD
								</h3>
								<ul className='mt-2 sm:mt-5 text-gray-600'>
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
						</article>
						<article
							key={'758d0c19-4d01-470d-acff-5959960dedab'}
							className='flex max-w-xl flex-col justify-center items-center mb-3 sm:mb-0'
						>
							<Image
								src={`/img/demolish-service.png`}
								height={100}
								width={260}
								alt='Usługi'
								className='rounded-lg opacity-80 mb-3'
							/>
							<div className='group relative'>
								<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900'>
									INNE
								</h3>
								<ul className='mt-2 sm:mt-5 text-gray-600'>
									<li>- wyburzenia obiektów małej architektury</li>
									<li>- wyrywanie korzeni</li>
									<li>
										- wiercenie otworów pod słupy konktrukcyjne/ogrodzeniowe
									</li>
									<li>- budowa dróg dojazdowych</li>
									<li>- melioracje i drenaże</li>
								</ul>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}
