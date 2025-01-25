import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaPhone } from 'react-icons/fa6';
import Image from 'next/image';

export default function Home() {
	return (
		<section className='h-full relative overflow-hidden'>
			<div className='absolute inset-0 sketchy-bg'></div>
			<div className='container mx-auto h-full px-5 sm:px-10 py-1 md:p-8 flex flex-col relative z-10 pt-24 md:pt-28'>
				<div className='flex flex-col max-w-5xl mx-auto w-full gap-4 md:gap-8 animate-slideUp opacity-0 pt-3 md:pt-8' style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
					<div
						className='text-2xl sm:text-2xl md:text-4xl flex flex-col items-center font-bold
						relative mb-1 md:mb-0'
					>
						<h1 className="relative px-4 py-2 z-10 text-black">
							USŁUGI MINIKOPARKĄ
							<span className="absolute left-0 bottom-2 w-[102%] h-4 bg-amber-400/40 -skew-x-12 -z-10 transform -translate-x-[8%]"></span>
						</h1>
					</div>
					<p
						className='text-sm sm:text-md md:text-lg
								text-black
								font-bold
								text-center
								animate-slideUp
								opacity-0
								max-w-2xl
								mx-auto
								leading-relaxed md:leading-normal
								mb-2 md:mb-0'
						style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
					>
						Dzięki niewielkim gabarytom i dużej mocy maszyny, jesteśmy w stanie
						sprostać najbardziej wymagającym i precyzyjnym zadaniom
					</p>
					<div
						className='flex gap-4 justify-center animate-slideUp opacity-0 mb-3 md:mb-0'
						style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
					>
						<div className='md:hidden phone-bounce'>
							<Link href='/kontakt' passHref legacyBehavior>
								<Button
									className='text-sm sm:text-base bg-amber-400 hover:bg-amber-300 px-8 sm:px-10 py-2.5 font-bold shadow-lg'
									size='default'
								>
									Kontakt
								</Button>
							</Link>
						</div>
						<div className='hidden md:flex md:space-x-4 justify-between items-center phone-bounce me-5'>
							<FaPhone className='text-2xl' />
							<a href="tel:506502709" className='text-3xl font-bold hover:text-amber-500 transition-colors'>
								506 502 709
							</a>
						</div>
					</div>
				</div>

				<div
					className='relative h-[calc(100%-200px)] sm:h-[calc(100%-110px)] md:h-[calc(100%-250px)] animate-slideUp opacity-0 mt-1 md:mt-12 max-w-5xl mx-auto w-[85%] sm:w-full'
					style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
				>
					<Image
						src='/img/homepage/landing-page.png'
						alt='Usługi minikoparką'
						fill
						className='rounded-xl object-contain px-4 sm:px-0'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
