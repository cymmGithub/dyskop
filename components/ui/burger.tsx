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

const font = Outfit({ subsets: ['latin'] });

const services = [
	{ title: 'Wykopy', href: '/zakres-uslug' },
	{ title: 'Niwelacja terenu', href: '/zakres-uslug' },
	{ title: 'Rozbiórki', href: '/zakres-uslug' },
	{ title: 'Drenaż', href: '/zakres-uslug' },
	{ title: 'Przygotowanie działki', href: '/zakres-uslug' },
	{ title: 'Transport materiałów', href: '/zakres-uslug' },
];

const Burger = () => {
	const [servicesOpen, setServicesOpen] = useState(false);

	return (
		<div className='lg:hidden'>
			<Sheet>
				<SheetTrigger>
					<AlignJustify className='ml-11 mr-2' />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
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
											<div className='flex flex-col space-y-2 pl-4 border-l-2 border-amber-400'>
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
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Burger;
