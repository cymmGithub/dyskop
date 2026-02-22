import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/" passHref legacyBehavior>
			<div className="flex w-[60px] md:w-[260px] hover:cursor-pointer">
			<Image
				src="/img/logo/dyskop-logo.png"
				width={130}
				height={130}
				alt="Dys-kop - Usługi minikoparką Lublin"
				priority
			/>
			</div>
		</Link>
	);
};

export default Logo;
