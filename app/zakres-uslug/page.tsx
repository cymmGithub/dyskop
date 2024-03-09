import Image from 'next/image';

export default function Services() {
	return (
		<div className='bg-white sm:py-20'>
			<div className='mx-auto max-w-7xl '>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-3'>
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
							<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
								WYKOPY
							</h3>
							<p className='mt-2 sm:mt-5 text-gray-600'>
								<ul>
									<li>- odkopywanie fundamentów pod izolacje</li>
									<li>- niwelacje i kształtowanie terenu</li>
									<li>- skarpowanie</li>
									<li>- zbieranie humusu (warstwy wierzchniej ziemi)</li>
									<li>- korytowanie</li>
									<li>- oczyszczanie rowów</li>
								</ul>
							</p>
						</div>
					</article>
					<article
						key={'8c1bddeb-84f7-43b5-9884-218aa47189f3'}
						className='flex max-w-xl flex-col justify-center items-center mb-3 sm:mb-0'
					>
						<Image
							src={`/img/connections.png`}
							height={100}
							width={260}
							alt='Usługi'
							className='rounded-lg opacity-70 mb-1'
						/>
						<div className='group relative'>
							<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
								WYKOPY LINIOWE POD
							</h3>
							<p className='mt-2 sm:mt-5 text-gray-600'>
								<ul>
									<li>
										- przyłącza: elektryczne, gazowe, wodne, kanalizacyjne,
										telekomunikacyjne
									</li>
									<li>- światłowody</li>
									<li>- fundamenty</li>
									<li>- sieci rur drenarskich</li>
									<li>- nawodnienie/ odwodnienie</li>
								</ul>
							</p>
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
							<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
								INNE
							</h3>
							<p className='mt-2 sm:mt-5 text-gray-600'>
								<ul>
									<li>- wyburzenia obiektów małej architektury</li>
									<li>- wyrywanie korzeni</li>
									<li>
										- wiercenie otworów pod słupy konktrukcyjne/ogrodzeniowe
									</li>
									<li>- budowa dróg dojazdowych</li>
									<li>- melioracje i drenaże</li>
								</ul>
							</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
}
