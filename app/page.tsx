import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';

export default function Home() {
	return (
		<section className='h-full relative overflow-hidden'>
			<div className='absolute inset-0 sketchy-bg mt-12 md:mt-20'></div>
			<div className='container mx-auto h-full px-5 sm:px-10 py-1 md:p-8 flex flex-col relative z-10 pt-20 md:pt-28'>
				<div
					className='flex flex-col max-w-5xl mx-auto w-full gap-2 md:gap-4 animate-slideUp opacity-0 pt-3 md:pt-8'
					style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
				>
					<div
						className='text-2xl sm:text-2xl md:text-4xl flex flex-col items-center font-bold
						relative '
					>
						<h1 className='relative px-4 py-2 z-10 me-0 sm:me-5 text-black'>
							USŁUGI MINIKOPARKĄ
						</h1>
					</div>
					<div className='text-black flex flex-row gap-8 sm:gap-12 md:gap-20 font-bold text-sm sm:text-base md:text-xl items-center justify-center italic ms-4'>
						<div className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent'>
								<span className="inline transform skew-x-12 text-black">PRACE ZIEMNE</span>
							</h3>
						</div>
						<div className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent'>
								<span className="inline transform skew-x-12 text-black">ODWIERTY WIERTNICĄ</span>
							</h3>
						</div>
						<div className='relative'>
							<h3 className='relative z-10 inline transform -skew-x-12 bg-[linear-gradient(rgba(245,158,11,0.4),rgba(245,158,11,0.4))] bg-[length:100%_0.75rem] bg-bottom bg-no-repeat [box-decoration:clone] [-webkit-box-decoration:clone] px-2 text-transparent'>
								<span className="inline transform skew-x-12 text-black">WSTAWIANIE SŁUPKÓW</span>
							</h3>
						</div>
					</div>
					<p
						className='text-sm sm:text-md
								text-black
								font-bold
								text-center
								animate-slideUp
								opacity-0
								max-w-2xl
								mx-auto
								leading-relaxed md:leading-normal
								md:mb-12'
						style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
					>
						Dzięki niewielkim gabarytom i dużej mocy maszyny, jesteśmy w stanie
						sprostać najbardziej wymagającym i precyzyjnym zadaniom
					</p>
				</div>
				<div
					className='relative h-full animate-slideUp opacity-0 max-w-5xl mx-auto w-full'
					style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
				>
					<Card />
				</div>
			</div>
		</section>
	);
}
