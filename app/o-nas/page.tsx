const people = [
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More people...
];

export default function Example() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
				<div className='max-w-2xl'>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
					Nasza firma dysponuje profesjonalną koparką jednonaczyniową Caterpillar 301.8. Maszyna ta ma największą moc w klasie koparek do 2 ton przez co jest w stanie dotrzeć tam gdzie nie wjedzie duży sprzęt i wykonać roboty ziemne szybko i sprawnie.
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
					Koparka posiada rozsuwane gąsiennice dzięki czemu może wjechać w bardzo ciasne miejsca - nawet o szerokości 1m.
					</p>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
					Maszyna ma fukncje pływającego lemiesza (niespotykaną w innych minikoparkach) polegającą na tym, że system automatycznie w czasie jazdy koryguje jego pozycję, dzięki czemu po zakończeniu wykopów teren zostanie idealnie wyrównany.
					</p>
				</div>
				<ul
					role='list'
					className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
				>
					{people.map((person) => (
						<li key={person.name}>
							<div className='flex items-center gap-x-6'>
								<img
									className='h-16 w-16 rounded-full'
									src={person.imageUrl}
									alt=''
								/>
								<div>
									<h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
										{person.name}
									</h3>
									<p className='text-sm font-semibold leading-6 text-indigo-600'>
										{person.role}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
