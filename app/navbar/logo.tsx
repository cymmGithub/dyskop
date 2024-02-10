import Image from 'next/image';

const Logo = () => {
	return (
		<div>
			<Image src="/img/logo/dyskop.jpg" width={100} height={100} alt="Logo" />
		</div>
	);
};

export default Logo;
