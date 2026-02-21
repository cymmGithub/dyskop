'use client';

import * as React from 'react';
import Link from 'next/link';
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
	{ title: 'Wykopy', href: '/zakres-uslug', description: 'Wykopy pod fundamenty, instalacje i przyłącza' },
	{ title: 'Niwelacja terenu', href: '/zakres-uslug', description: 'Wyrównywanie i profilowanie terenu' },
	{ title: 'Rozbiórki', href: '/zakres-uslug', description: 'Rozbiórki małych obiektów i nawierzchni' },
	{ title: 'Drenaż', href: '/zakres-uslug', description: 'Systemy odwadniające i drenaże opaskowe' },
	{ title: 'Przygotowanie działki', href: '/zakres-uslug', description: 'Karczowanie, czyszczenie i przygotowanie gruntu' },
	{ title: 'Transport materiałów', href: '/zakres-uslug', description: 'Załadunek i przemieszczanie materiałów sypkich' },
];

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, children, href, ...props }, ref) => (
	<li>
		<NavigationMenuLink asChild>
			<Link
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={href ?? '#'}
				className={cn(
					'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50 focus:text-amber-900',
					className
				)}
				{...props}
			>
				<div className="text-sm font-semibold leading-none">{title}</div>
				<p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1.5">
					{children}
				</p>
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
						<ul className="grid w-[400px] gap-1 p-3 md:w-[500px] md:grid-cols-2 lg:w-[560px]">
							{services.map((service) => (
								<ListItem
									key={service.title}
									title={service.title}
									href={service.href}
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
