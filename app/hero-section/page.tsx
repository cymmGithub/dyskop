import { Button } from '@/components/ui/button';

const HeroSection = () => {
	return (
		<section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to gray-200 space-y-10">
			<div className="container mx-auto text-center">
				<div
					className="text-4xl sm:text-6xl flex justify-center font-bold md:px-20 pb-10
				text-gradient bg-gradient-to-r from-black to-yellow-400 bg-clip-text
				text-transparent"
				>
					<h1>Usługi Minikoparką</h1>
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
					<Button className="text-md bg-blue-500" size="lg">
						Kontakt
					</Button>
					<Button className="text-md" size="lg" variant="ghost">
						Co potrafimy ?
					</Button>
				</div>
				<div className='md:px-10'>
					<video className="rounded-xl" autoPlay muted loop>
						<source src="/video/test-video.mp4" />
					</video>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
