import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/" passHref legacyBehavior>
			<div className="flex w-[80px] md:w-[260px] hover:cursor-pointer">
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
