"use client";

import { useCookieConsent } from "@/lib/cookie-consent";
import { useEffect, useState } from "react";

export default function CookieBanner() {
	const { consent, acceptCookies, rejectCookies } = useCookieConsent();
	const [mounted, setMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [isAnimatingOut, setIsAnimatingOut] = useState(false);

	// Handle hydration - don't render anything until client-side
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted && consent === "pending") {
			// Small delay before showing banner for better UX
			const timer = setTimeout(() => setIsVisible(true), 500);
			return () => clearTimeout(timer);
		}
	}, [consent, mounted]);

	const handleAccept = () => {
		setIsAnimatingOut(true);
		setTimeout(() => {
			acceptCookies();
			setIsVisible(false);
		}, 300);
	};

	const handleReject = () => {
		setIsAnimatingOut(true);
		setTimeout(() => {
			rejectCookies();
			setIsVisible(false);
		}, 300);
	};

	// Don't render during SSR or before hydration
	if (!mounted || consent !== "pending" || !isVisible) {
		return null;
	}

	return (
		<>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[9998] transition-opacity duration-300 ${
					isAnimatingOut ? "opacity-0" : "opacity-100"
				}`}
				aria-hidden='true'
			/>

			{/* Banner */}
			<div
				role='dialog'
				aria-modal='true'
				aria-labelledby='cookie-banner-title'
				aria-describedby='cookie-banner-description'
				className={`fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-300 ease-out ${
					isAnimatingOut
						? "translate-y-full opacity-0"
						: "translate-y-0 opacity-100"
				}`}
			>
				{/* Construction-style warning stripes */}
				<div
					className='h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-[length:40px_100%] animate-pulse'
					style={{
						backgroundImage:
							"repeating-linear-gradient(45deg, #fbbf24 0px, #fbbf24 10px, #1f2937 10px, #1f2937 20px)",
					}}
				/>

				<div className='bg-gray-900 border-t-2 border-amber-400/50 shadow-2xl shadow-black/50'>
					<div className='container mx-auto px-4 py-5 sm:py-6'>
						<div className='flex flex-col  lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8'>
							{/* Content */}
							<div className='flex-1 space-y-2'>
								<div className='flex items-center gap-3 justify-center sm:justify-start'>
									{/* Cookie icon */}
									<div className='flex-shrink-0 w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center'>
										<svg
											className='w-5 h-5 text-amber-400'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
									</div>
									<h2
										id='cookie-banner-title'
										className='text-white font-bold text-base sm:text-lg tracking-wide'
									>
										Pliki cookies
									</h2>
								</div>

								<p
									id='cookie-banner-description'
									className='text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl'
								>
									Używamy plików cookies, aby lepiej rozumieć, jak odwiedzający
									korzystają z naszej strony.
								</p>
							</div>

							{/* Buttons - Equal prominence per GDPR */}
							<div className='flex flex-col sm:flex-row gap-3 lg:flex-shrink-0'>
								<button
									onClick={handleReject}
									className='group relative px-6 py-3 text-sm font-bold tracking-wide uppercase
                           border-2 border-gray-500 text-gray-300
                           hover:border-white hover:text-white
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900
                           transition-all duration-200 rounded-md
                           min-w-[140px]'
									aria-label='Odrzuć opcjonalne pliki cookies'
								>
									<span className='relative z-10'>Odrzucam</span>
									<div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md' />
								</button>

								<button
									onClick={handleAccept}
									className='group relative px-6 py-3 text-sm font-bold tracking-wide uppercase
                           border-2 border-gray-500 text-gray-300
                           hover:border-white hover:text-white
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900
                           transition-all duration-200 rounded-md
                           min-w-[140px]'
									aria-label='Akceptuj wszystkie pliki cookies'
								>
									<span className='relative z-10'>Akceptuję</span>
									<div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
