'use client';

import { useState } from 'react';
import { AlignJustify, ChevronDown } from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Outfit } from 'next/font/google';
import SocialButtons from '@/components/social-buttons/social-buttons';

const font = Outfit({ subsets: ['latin'] });

const services = [
	{ title: 'Usługi minikoparką', href: '/uslugi-minikoparka-lubelskie' },
	{ title: 'Konstrukcje sadownicze', href: '/konstrukcje-sadownicze-lubelskie' },
	{ title: 'Usługi minitraktorem', href: '/uslugi-minitraktorem-lubelskie' },
	{ title: 'Glebogryzarka separacyjna', href: '/glebogryzarka-separacyjna-lubelskie' },
	{ title: 'Koszenie działek', href: '/koszenie-dzialek-lubelskie' },
	{ title: 'Orka działek', href: '/orka-dzialek-lubelskie' },
];

const Burger = () => {
	const [servicesOpen, setServicesOpen] = useState(false);

	return (
		<div className='lg:hidden'>
			<Sheet>
				<SheetTrigger>
					<AlignJustify className='ml-11 mr-2' />
				</SheetTrigger>
				<SheetContent className='flex flex-col'>
					<SheetHeader className='text-left flex-1'>
						<SheetDescription>
							<div className={`flex flex-col space-y-4 items-start w-full text-lg text-black mt-10 ${font.className}`}>
								<SheetClose asChild>
									<Link href='/o-nas'>O Nas</Link>
								</SheetClose>
								<div className='w-full'>
									<button
										onClick={() => setServicesOpen(!servicesOpen)}
										className='flex items-center gap-1 text-lg text-black'
									>
										Zakres Usług
										<ChevronDown
											className={`h-5 w-5 shrink-0 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
										/>
									</button>
									<div
										className={`grid overflow-hidden transition-all duration-200 ${servicesOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}`}
									>
										<div className='overflow-hidden'>
											<div className='flex flex-col space-y-2 pl-4 border-l-2 border-amber-400 text-left'>
												{services.map((service) => (
													<SheetClose asChild key={service.title}>
														<Link
															href={service.href}
															className='text-sm text-muted-foreground hover:text-amber-900 transition-colors'
														>
															{service.title}
														</Link>
													</SheetClose>
												))}
											</div>
										</div>
									</div>
								</div>
								<SheetClose asChild>
									<Link href='/realizacje'>Realizacje</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link href='/kontakt'>Kontakt</Link>
								</SheetClose>
							</div>
						</SheetDescription>
					</SheetHeader>
					<div className='mt-auto border-t border-gray-100 pt-4 pb-2'>
						<p className='text-xs text-muted-foreground mb-3'>Znajdź nas</p>
						<SocialButtons variant="burger" />
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Burger;
