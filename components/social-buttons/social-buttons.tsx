import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

type Variant = 'navbar' | 'burger' | 'footer';

const links = [
	{
		href: 'https://www.facebook.com/dys.kop.minikoparka',
		label: 'Facebook Dys-Kop — usługi minikoparką Lublin',
		icon: FaFacebookF,
		hoverClass: 'hover:bg-blue-600 hover:border-blue-600 hover:text-white',
	},
	{
		href: 'https://www.instagram.com/dyskop_minikoparka/',
		label: 'Instagram Dys-Kop — usługi minikoparką Lublin',
		icon: FaInstagram,
		hoverClass:
			'hover:bg-gradient-to-br hover:from-amber-500 hover:via-pink-600 hover:to-purple-700 hover:border-transparent hover:text-white',
	},
] as const;

const variantStyles: Record<Variant, { container: string; link: string }> = {
	navbar: {
		container: 'hidden lg:flex gap-3',
		link: 'border-gray-200 text-gray-500',
	},
	burger: {
		container: 'flex gap-3',
		link: 'border-gray-200 text-gray-500',
	},
	footer: {
		container: 'flex gap-2',
		link: 'border-gray-300 text-gray-400',
	},
};

const SocialButtons = ({ variant = 'navbar' }: { variant?: Variant }) => {
	const styles = variantStyles[variant];

	return (
		<div className={styles.container}>
			{links.map(({ href, label, icon: Icon, hoverClass }) => (
				<a
					key={href}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
					className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${styles.link} ${hoverClass}`}
				>
					<Icon size={16} />
				</a>
			))}
		</div>
	);
};

export default SocialButtons;
