import HeroSection from './home/page';

export default function Home() {
	return (
		<div className='md:container mx-auto text-center'>
			<div className='absolute h-full w-full dots' />
			<HeroSection />
		</div>
	);
}
