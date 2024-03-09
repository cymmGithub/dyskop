import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/" passHref legacyBehavior>
			<div className="flex lg:w-40 w-20 hover:cursor-pointer md:mr-12">
				<Image
					src="/img/logo/dyskop-logo.png"
					width={150}
					height={150}
					alt="Logo"
				/>
			</div>
		</Link>
	);
};

export default Logo;
