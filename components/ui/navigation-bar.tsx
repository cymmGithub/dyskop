'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
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

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'WYKOPY LINIOWE POD:',
		href: '/docs/primitives/alert-dialog',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'WYKOPY:',
		href: '/docs/primitives/hover-card',
		description:
			'For sighted users to preview content available behind a link.',
	},
	{
		title: 'INNE:',
		href: '/inne',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'KSZTAŁTOWANIE TERENU',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.',
	},
];

const NavigationBar = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="hidden md:flex md:space-x-4 ml-20">
				<NavigationMenuItem>
					<NavigationMenuTrigger>O nas</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<Image
											src="/img/navbar/miniexcavator-navbar.png"
											alt="Miniexcavator photo"
											className="rounded"
											width={250}
											height={120}
										></Image>
										<div className="mb-2 mt-4 text-lg font-medium">Dyskop</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Świadczymy usługi profesjonalną minikoparką Caterpillar o
											wadze 2 ton.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem title="Gdzie działamy ?">
							Usługi świadczymy głównie w Lublinie i powiecie lubelskim oraz na terenie powiatów ościennych: świdnickiego, lubartowskiego, opolskiego, puławskiego i kraśnickiego. Przy większych projektach działamy na terenie całego województwa lubelskiego oraz ościennych.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/galeria" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Zakres Usług
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/realizations" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Realizacje
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 eleading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-md mb-4 font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';

export default NavigationBar;
