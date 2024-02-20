import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa6';

const HeroSection = () => {
	return (
		<section className="md:py-20 bg-gradient-to-r from gray-00 to gray-200 space-y-10">
			<div className="container mx-auto text-center">
				<div
					className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-10
				text-gradient bg-gradient-to-r from-black to-yellow-400 bg-clip-text
				text-transparent"
				>
					<h1>USŁUGI MINIKOPARKĄ</h1>
				</div>
				<p
					className="text-lg md:text-xl md-10
							bg-gradient-to-r
							from-black
							to-gray-400
							bg-clip-text
							text-transparent
							font-bold
							"
				>
					Dzięki niewielkim gabarytom i dużej mocy maszyny, jesteśmy w stanie
					sprostać najbardziej wymagającym i precyzyjnym zadaniom
				</p>
				<div className="flex gap-4 justify-center p-5">
					<Link href="/kontakt" passHref legacyBehavior>
						<Button
							className="md:hidden text-md bg-amber-400 px-14"
							size="lg"
						>
							Kontakt
						</Button>
					</Link>
					<div className="hidden md:flex md:space-x-4 mr-10 justify-between items-center">
						<FaPhone />
						<span className="text-2xl font-bold">506 502 709</span>
					</div>
				</div>
				<div className="md:px-10">
					<video className="rounded-xl w-full" autoPlay muted loop>
						<source src="/video/landing-page.mp4" />
					</video>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
