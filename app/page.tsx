import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { FaPhone } from 'react-icons/fa';

export default function Home() {
	return (
		<section className='min-h-screen relative overflow-x-hidden'>
			<div className='absolute inset-0 sketchy-bg mt-12 md:mt-20'></div>
			<div className='container mx-auto gap-6 sm:gap-10 min-h-screen px-5 sm:px-10 py-1 md:p-8 flex flex-col relative z-10 pt-20 md:pt-28 pb-20'>
				<div
					className='flex flex-col max-w-5xl mx-auto w-full gap-2 md:gap-4 animate-slideUp opacity-0 pt-3 md:pt-8'
					style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
				>
					<div
						className='text-2xl sm:text-2xl md:text-4xl flex flex-col items-center font-bold
						relative md:me-10'
					>
						<h1 className='relative px-4 py-2 z-10 text-black'>
							USŁUGI MINIKOPARKĄ
						</h1>
					</div>
					<div className='text-black flex flex-row gap-8 sm:gap-12 md:gap-20 font-bold text-sm sm:text-base md:text-xl items-center justify-center italic ms-4 text-center'>
						<Link href='/zakres-uslug' className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent hover:bg-[length:100%_1rem] transition-all duration-300 cursor-pointer'>
								<span className="inline transform skew-x-12 text-black">PRACE ZIEMNE</span>
							</h3>
						</Link>
						<Link href='/zakres-uslug' className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent hover:bg-[length:100%_1rem] transition-all duration-300 cursor-pointer'>
								<span className="inline transform skew-x-12 text-black">ODWIERTY WIERTNICĄ</span>
							</h3>
						</Link>
						<Link href='/zakres-uslug' className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent hover:bg-[length:100%_1rem] transition-all duration-300 cursor-pointer'>
								<span className="inline transform skew-x-12 text-black">WSTAWIANIE SŁUPKÓW</span>
							</h3>
						</Link>
					</div>
				</div>
				<div
						className='flex justify-center animate-slideUp opacity-0 mb-3 md:mb-0'
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
						<div className='hidden md:flex md:space-x-4 justify-between items-center phone-bounce me-10'>
							<FaPhone className='text-2xl' />
							<a href="tel:506502709" className='text-3xl font-bold hover:text-amber-500 transition-colors'>
								506 502 709
							</a>
						</div>
					</div>
				<div
					className='relative flex-1 animate-slideUp opacity-0 max-w-5xl mx-auto w-full'
					style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
				>
					<Card />
				</div>
			</div>
		</section>
	);
}
