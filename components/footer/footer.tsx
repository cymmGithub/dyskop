import { usePathname } from 'next/navigation';

const Footer = () => {
	const pathname = usePathname();
	const isContactPage = pathname === '/kontakt';

	return (
		<footer
			className={`bg-white relative z-50 ${isContactPage ? 'sm:block hidden' : ''}`}
			style={{
				WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)',
				maskImage: 'linear-gradient(to bottom, transparent 0%, black 35%)'
			}}
		>
			<div className="new_footer_top">
				<div className="container"></div>
				<div className="footer_bg">
					<div className="footer_bg_one"></div>
					<div className="footer_bg_two"></div>
				</div>
			</div>
			<div className="footer_bottom">
				<div className="container">
					<div className="flex justify-center items-center">
						<p className="text-sm">
							© Firma Dys-Kop, kontakt@dys-kop.pl | NIP 7133124621
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
