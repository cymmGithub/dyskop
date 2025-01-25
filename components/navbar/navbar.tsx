import Burger from '../ui/burger';
import Logo from '../ui/logo';
import PhoneNumber from '@/components/ui/phone-number';
import NavigationBar from '../ui/navigation-bar';
import Link from 'next/link';
import { Button } from '../ui/button';
import SocialButtons from '../social-buttons/social-buttons';

const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 right-0 z-50'>
			<div className='bg-white/70 backdrop-blur-sm shadow-sm md:bg-white md:backdrop-blur-none md:shadow-none'>
				<div className='container mx-auto px-5 sm:px-10'>
					<div className="flex justify-center items-center sm:px-10 px-5 h-24 md:h-28">
						<div className="flex-1 flex justify-start">
							<Logo />
						</div>
						<div className="flex-1 flex justify-center items-center gap-1 sm:gap-2 md:gap-8">
							<PhoneNumber />
							<NavigationBar />
						</div>
						<div className="flex-1 flex justify-end items-center gap-4">
							<SocialButtons />
							<Link href="/kontakt" passHref legacyBehavior>
								<Button
									className="hidden lg:flex shadow-2xl text-sm font-bold bg-amber-400 hover:bg-amber-300 px-10"
									size="default"
								>
									<span>KONTAKT</span>
								</Button>
							</Link>
							<Burger />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
