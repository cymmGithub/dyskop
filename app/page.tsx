import Navbar from '../components/navbar/navbar';
import HeroSection from './hero-section/page';
import Footer from '../components/footer/page'

export default function Home() {
	return (
		<div className='md:container mx-auto text-center'>
			<HeroSection />
			<Footer />
		</div>
	);
}
