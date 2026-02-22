'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const services = [
	{ title: 'Usługi minikoparką', href: '/uslugi-minikoparka-lubelskie', description: 'Profesjonalne usługi minikoparką, realizowane kompaktową maszyną Caterpillar 301.8', image: '/img/homepage/minikoparka-prace-ziemne-lublin.png' },
	{ title: 'Konstrukcje sadownicze', href: '/konstrukcje-sadownicze-lubelskie', description: 'Wiercenie otworów i montaż słupów sadowniczych', image: '/img/homepage/konstrukcje-sadownicze-wiertnica-lublin.png' },
	{ title: 'Usługi minitraktorem', href: '/uslugi-minitraktorem-lubelskie', description: 'Koszenie, orka, przygotowanie terenu', image: '/img/minitraktor-glebogryzarka-separacyjna-lublin.png' },
	{ title: 'Glebogryzarka separacyjna', href: '/glebogryzarka-separacyjna-lubelskie', description: 'Przygotowanie terenu pod trawnik i ogrody', image: '/img/efekt-glebogryzarki-separacyjnej-trawnik-lublin.jpg' },
	{ title: 'Koszenie działek', href: '/koszenie-dzialek-lubelskie', description: 'Kosiarka bijakowa i pielęgnacyjna na nieużytki i trawniki', image: '/img/koszenie-nieuzytkow-kosiarka-bijakowa-efekt.jpg' },
	{ title: 'Orka działek', href: '/orka-dzialek-lubelskie', description: 'Orka pługiem dwuskibowym pod uprawy i ogrody', image: '/img/orka-plugiem-efekt-przygotowanie-gleby-lublin.jpg' },
];

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & { title: string; image?: string }
>(({ className, title, children, href, image, ...props }, ref) => (
	<li>
		<NavigationMenuLink asChild>
			<Link
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={href ?? '#'}
				className={cn(
					'flex items-center gap-3 select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50 focus:text-amber-900',
					className
				)}
				{...props}
			>
				{image && (
					<Image
						src={image}
						alt=""
						width={60}
						height={40}
						className="rounded-md object-cover shrink-0"
						style={{ width: 60, height: 40 }}
					/>
				)}
				<div className="space-y-1 leading-none">
					<div className="text-sm font-semibold leading-none">{title}</div>
					<p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1.5">
						{children}
					</p>
				</div>
			</Link>
		</NavigationMenuLink>
	</li>
));
ListItem.displayName = 'ListItem';

const NavigationBar = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="hidden md:flex md:space-x-2 lg:space-x-4">
				<NavigationMenuItem>
					<Link href="/o-nas" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							O Nas
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Zakres Usług</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-1 p-3 md:w-[500px] md:grid-cols-2 lg:w-[640px]">
							{services.map((service) => (
								<ListItem
									key={service.title}
									title={service.title}
									href={service.href}
									image={service.image}
								>
									{service.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/realizacje" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Realizacje
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default NavigationBar;
