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
	{ title: 'Usługi minikoparką', href: '/uslugi-minikoparka-lubelskie', description: 'Profesjonalne usługi minikoparką, realizowane kompaktową maszyną Caterpillar 301.8' },
	{ title: 'Konstrukcje sadownicze', href: '/konstrukcje-sadownicze-lubelskie', description: 'Wiercenie otworów i montaż słupów sadowniczych' },
	{ title: 'Usługi minitraktorem', href: '/uslugi-minitraktorem-lubelskie', description: 'Koszenie, orka, przygotowanie terenu' },
	{ title: 'Glebogryzarka separacyjna', href: '/glebogryzarka-separacyjna-lubelskie', description: 'Przygotowanie terenu pod trawnik i ogrody' },
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
