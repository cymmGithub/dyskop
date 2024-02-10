import Navbar from './navbar/page';
import HeroSection from './hero-section/page';
export default function Home() {
	return (
		<div className='md:container mx-auto text-center'>
			<Navbar />
			<HeroSection />
		</div>
	);
}
