import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaPhone } from 'react-icons/fa6';
import Image from 'next/image';

export default function Home() {
	return (
		<section className='h-full relative overflow-hidden'>
			<div className='container mx-auto h-full p-4 md:p-8 flex flex-col gap-2'>
				<div className='flex flex-col gap-2 animate-slideIn opacity-0' style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
					<div
						className='text-2xl sm:text-4xl flex justify-center font-bold
						text-gradient bg-gradient-to-r from-black to-yellow-400 bg-clip-text
						text-transparent'
					>
						<h1>USŁUGI MINIKOPARKĄ</h1>
					</div>
					<p
						className='text-sm md:text-base
								bg-gradient-to-r
								from-black
								to-gray-400
								bg-clip-text
								text-transparent
								font-black
								text-center
								animate-slideIn
								opacity-0'
						style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
					>
						Dzięki niewielkim gabarytom i dużej mocy maszyny, jesteśmy w stanie
						sprostać najbardziej wymagającym i precyzyjnym zadaniom
					</p>
					<div
						className='flex gap-4 justify-center animate-slideIn opacity-0'
						style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
					>
						<Link href='/kontakt' passHref legacyBehavior>
							<Button className='md:hidden text-sm bg-amber-400 px-10' size='default'>
								Kontakt
							</Button>
						</Link>
						<div className='hidden md:flex md:space-x-4 justify-between items-center chat-bubble'>
							<FaPhone className='phone-icon' />
							<span className='text-xl font-bold'>506 502 709</span>
						</div>
					</div>
				</div>

				<div
					className='relative flex-1 min-h-0 animate-slideUp opacity-0'
					style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
				>
					<Image
						src='/img/homepage/landing-page.png'
						alt='Usługi minikoparką'
						fill
						className='rounded-xl object-contain'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
