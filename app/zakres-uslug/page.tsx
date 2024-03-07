const links = [
	{ name: 'Open roles', href: '#' },
	{ name: 'Internship program', href: '#' },
	{ name: 'Our values', href: '#' },
	{ name: 'Meet our leadership', href: '#' },
];

const stats = [
	{ name: 'Offices worldwide', value: '12' },
	{ name: 'Full-time colleagues', value: '300+' },
	{ name: 'Hours per week', value: '40' },
	{ name: 'Paid time off', value: 'Unlimited' },
];

export default function Services() {
	return (
		<div className='relative isolate overflow-hidden  py-24 sm:py-32 text-center'>
			<div
				className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
				aria-hidden='true'
			>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>
						Zakres usług
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-300'>
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
						lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
						fugiat aliqua.
					</p>
				</div>
			</div>
		</div>
	);
}
