import Burger from '../ui/burger';
import Logo from '../ui/logo';
import PhoneNumber from '@/components/ui/phone-number';
import NavigationBar from '../ui/navigation-bar';
import Link from 'next/link';
import { Button } from '../ui/button';
import SocialButtons from '../social-buttons/social-buttons';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center sm:px-10 px-5 h-40">
			<Logo />
			<PhoneNumber />
			<NavigationBar />
			<Burger />
			<div className='flex justify-between items-center'>
				<SocialButtons />
				<Link href="/kontakt" passHref legacyBehavior>
					<Button
						className="hidden lg:flex text-md font-bold bg-amber-400 hover:bg-gray-600 px-14"
						size="lg"
					>
						Kontakt
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
