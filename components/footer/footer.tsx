'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Footer = () => {
	const pathname = usePathname();
	const isContactPage = pathname === '/kontakt';
	const currentYear = new Date().getFullYear();

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
					<address className="not-italic flex justify-center items-center gap-x-4 gap-y-1 flex-wrap text-sm text-[#7f88a6]">
						<span>© {currentYear} <Link href="/" className="hover:text-amber-500 transition-colors">Dys-Kop</Link></span>
						<span className="text-[#d1d5db]" aria-hidden="true">·</span>
						<a href="tel:+48506502709" className="hover:text-amber-500 transition-colors">506 502 709</a>
						<span className="text-[#d1d5db]" aria-hidden="true">·</span>
						<a href="mailto:kontakt@dys-kop.pl" className="hover:text-amber-500 transition-colors">kontakt@dys-kop.pl</a>
					</address>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
