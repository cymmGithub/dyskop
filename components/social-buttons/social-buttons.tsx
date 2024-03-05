import Link from 'next/link';

import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6';

const SocialButtons = () => {
	return (
		<div className="hidden lg:flex gap-2 mr-5">
			<Link href="https://www.facebook.com/dys.kop.minikoparka">
				<FaSquareFacebook size={30} className="hover:text-blue-600" />
			</Link>
			<Link href="https://www.instagram.com/dyskop_minikoparka/">
				<FaSquareInstagram size={30} className="hover:text-fuchsia-700" />
			</Link>
		</div>
	);
};

export default SocialButtons;
