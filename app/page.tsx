import ServiceCards from '@/components/ui/card';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Home() {
	return (
		<section className='min-h-screen relative overflow-x-hidden'>
			<div className='absolute inset-0 sketchy-bg mt-12 md:mt-20'></div>
			<div className='container mx-auto gap-4 sm:gap-6 min-h-screen px-5 sm:px-10 py-1 md:p-8 flex flex-col relative z-10 pt-16 md:pt-24 pb-16'>
				{/* Hero text */}
				<div
					className='flex flex-col max-w-3xl mx-auto w-full gap-2 md:gap-3 animate-slideUp opacity-0 pt-6 md:pt-4 text-center'
					style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
				>
					<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight'>
						Usługi minikoparką, wiertnicą i&nbsp;minitraktorem
						<span className='block text-amber-500 text-lg sm:text-xl md:text-2xl mt-1 font-semibold tracking-normal'>
							Lublin i&nbsp;okolice
						</span>
					</h1>
					<p className='text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto'>
						Wykopy, odwierty, konstrukcje sadownicze oraz przygotowanie terenu pod trawniki i&nbsp;uprawy.
					</p>
				</div>

				{/* Phone CTA */}
				<div
					className='flex justify-center animate-slideUp opacity-0'
					style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}
				>
					<a
						href='tel:506502709'
						className='group flex items-center gap-2 sm:gap-3 bg-gray-900 text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-full phone-bounce hover:bg-amber-500 transition-colors duration-300'
					>
						<FaPhoneAlt className='text-base sm:text-lg' />
						<span className='text-base sm:text-xl font-bold tracking-wide'>506 502 709</span>
					</a>
				</div>

				{/* Service cards */}
				<div className='max-w-5xl mx-auto w-full mt-2'>
					<ServiceCards />
				</div>
			</div>
		</section>
	);
}
