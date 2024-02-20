import Image from 'next/image';

const Logo = () => {
	return (
		<div className='flex lg:w-40 w-20'>
			<Image src="/img/logo/dyskop.png" width={150} height={150} alt="Logo" layout="responsive" />
		</div>
	);
};

export default Logo;
